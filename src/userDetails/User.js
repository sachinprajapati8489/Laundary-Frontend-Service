import { useEffect, useState } from "react"
import CopyRight from "../FooterComp/copyright"
import Navbar from "../HeaderComp/navbar"
import "./user.css"
import searchphoto from "./mag.svg"
import usermore from "../logo/more.png"
import userlist from "../logo/list@2x.png"
import { Link, redirect, useNavigate } from "react-router-dom"
import SummaryPage from "../SummaryPage/summary"
import Cancal from "../cancalorderpopup/cancal"
import 'bootstrap/dist/css/bootstrap.min.css'



let Userdetails = (props) => {
  const token = window.localStorage.getItem('token');
  const [name, set_name] = useState("");
  let [state, setstate] = useState([])
  let [sum, setsum] = useState(false)
  let [can, setcan] = useState(false)
  const [order_sum, set_order_sum] = useState();
  let [total_data, setTotal_data] = useState({})
  let [orde_id, set_order_id] = useState("");
  let [status_ord, set_status_ord] = useState("")
  function ca() {
    setsum(false)
  }
  function procced() {
    setcan(true)
  }
  function summary_page(idx) {
    console.log(state[idx].orderSummary)
    let orderSummary = state[idx].orderSummary;
    set_order_sum(orderSummary);
    let price = state[idx].price;
    let totel_items = state[idx].total_item;
    total_data.price = price;
    total_data.total_item = totel_items;
    setTotal_data({ price: price, tatal_item: totel_items })
    set_order_id(state[idx].order_id)
    setsum(true)
  }
  let navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      navigate('/')
    }
    console.log(token)
    fetch("https://laundary-backend-service.onrender.com/successfulLogin", {
      method: "get",
      headers: {
        authorization: token
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.post[0])
        setstate(data.post[0].orders);
        set_name(data.post[0].name);
      })
  }, [])
  const [cancle_flag, setFlag] = useState(false);
  function st_cancle(idx) {
    if(cancle_flag){
      state[idx].status = "Cancel"
    }
    
  }
  return (
    <>
      {can ? <Cancal setcan={setcan} orderId={orde_id} st_cancle={st_cancle} flag={setFlag}/> : ""}
      {sum ? <SummaryPage orderstatus={true} tData={total_data} procced={procced} cancalorder={ca} data={order_sum} /> : ""}
      <Navbar After_Login={true} name={name} />
      <div className="orders_body_cont">
        <div className="user-sidebar">
          <div className='bg_wh'><img src='./projecIimages/home2.png' alt='homm png' /></div>
          <div><Link to="/Cardorder"><img src={usermore} alt="create order" /> </Link></div>
          <div><img src={userlist} alt='options' /></div>
        </div>
        <div className="orders_section2">
          <div className="order_section2_1">
            <div><h3 >Orders History</h3></div>
            <div className="cr-order-btn-cont">
              {state.length > 0 ?<Link to="/Cardorder"><button className="btn btn-light btn-orders" >create</button></Link>:''}
              <img src={searchphoto} alt='search icon' className="order_search_icon" />
              <input type="search" />
            </div>
          </div>
          <div className="orders_table">
            {state.length === 0?
            <div className="create_btn_center">
              <i>No orders avaialble</i>
              <Link to="/Cardorder"><button className="btn btn-light btn-orders"style={{alignSelf:'center'}} >create</button></Link>
            </div>
            :""}
            {state.length > 0 ?
              <table className="table table-striped">
              <thead >
                <tr className="bg_dark col_wh">
                  <td>Order Id</td>
                  <td>Order Date & Time</td>
                  <td>Store Location</td>
                  <td>City</td>
                  <td> Store Phone</td>
                  <td>Total items</td>
                  <td> Price</td>
                  <td>status</td>
                  <td>View</td>
                </tr>
              </thead>
              <tbody>
                {state.map((ele, i) => {
                  return (
                    <tr key={i}>
                      <td>{ele.order_id}</td>
                      <td>{ele.orderDate}</td>
                      <td>{ele.location}</td>
                      <td>{ele.city}</td>
                      <td>{ele.phone}</td>
                      <td>{ele.total_item}</td>
                      <td style={{ color: "#5861AE" }}>{ele.price}</td>
                      <td>{ele.status}</td>
                      <td><i className="far fa-eye" key={i} onClick={() => { summary_page(i); st_cancle(i) }}></i></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>:""
            }
          </div>
        </div>
      </div>
      <CopyRight />
    </>
  )
}

export default Userdetails