import {  useEffect, useState } from 'react'


import {  Link, useNavigate } from 'react-router-dom';
import Userdetails from '../userDetails/User';
import axios from 'axios'
import './summary.css'

function SummaryPage(props){
    const [store_address,set_storeAdd] = useState(false);
        const [user_add,set_userAdd] = useState(false)
    let val1=props.itemarry
    let p=0
    let Quantity=0
    let token=window.localStorage.getItem('token');
    let orderDetails=[];
    let data = {}
    
    const [unique,set_unique] = useState(0)
    if(props.orderstatus){
        data = props.data
        orderDetails = data;
    }
    else{
        orderDetails=props.itemarry
        for(let i=0;i<val1.length;i++){
            p=p+(val1[i].quantity* val1[i].washing+val1[i].ironing+val1[i].bleach+val1[i].towel)
            Quantity=Quantity+Number(val1[i].quantity)
        } 
      data = {
    order_id: `laundry${unique}`,
    orderDate: `${new Date().toJSON().slice(0, 10)},${new Date().getHours()}:${new Date().getMinutes()}`,
    location: "haryana",
    city: "narnaul",
    phone: "+917656579478",
    total_item: Quantity,
    price:p ,
    status: "Ready to pickup",
    orderSummary:props.itemarry
}
    }
    const navigate = useNavigate()
    let[usewrong,setwrong]=useState(false)
    

    function wrong(){

        console.log("wrong",props);
        if(props.orderstatus){
            props.cancalorder()
        
    }else{props.cr_summary(false)}
    }
    

        
        function get_storeAdd(e){
            console.log(e.target.value)
            let sel_data = e.target.value;

            if(sel_data !== "Choose..."){
                set_storeAdd(true)
            }else{
                set_storeAdd(false)

        }
    }
        function get_user_add(e){
            console.log(e.target.value);
            set_userAdd(true);
        }
         async function confrim_order(e){
            e.preventDefault();
            if(store_address && user_add){
                // send details to backend  route ('/successfulLogin') in json formate.
                // if response status 200 then redirect  to '/sucessPopup' route.
                
                set_unique(unique+1)
                await axios.post("https://laundarybackendservice.onrender.com/successfulLogin",data,{
                    headers: {
                        Authorization: token,
                         //th token is a variable which holds the token
                         'Content-Type': 'application/json;charset=UTF-8',

                      }
                })
                navigate('/sucessPopup')
                console.log(data)
            }
        }
        function comf_cancal(){
            props.confrimCancal(true);
            props.changeback()
            
        }
        function procced(){
            props.cancalorder();
            props.procced()
        }
            
    return(
        
        <div className="summary_container">

            <div id="blur_container"></div>
            <div id="summary_header" >
                <div id='sum_head_cont'>
                    <h3>SUMMARY</h3>
                    <h4 onClick={wrong} style={{color:'white'}}> X </h4>
                  
                </div>
                <div id='store_details'>
                    <div>
                        <h6>Store Location:</h6>
                        <select id='options'onChange={get_storeAdd} disabled={props.orderstatus?true:false}>
                            {props.orderstatus?'':<option>Choose...</option>}
                            <option>Balagi</option>
                        </select>
                    </div>
                    <div>
                    <h6>Store Address:</h6>
                    {store_address || props.orderstatus?<p>Near Mahaveer Chowk Narnaul</p>:<p>__</p>}
                    
                    </div>
                    <div>
                        <h6>Phone </h6>
                        {store_address || props.orderstatus?<p>+919999999999</p>:<p>__</p>}
                        
                    </div>
                </div>
                {props.orderstatus?<div>enter</div>:""}
                <div className='order_summ_cont'>
                    <div>Order Details</div>
                    <div>
                        <table>
                            <thead></thead>
                            <tbody>
                        {orderDetails?.map((val,key)=>{
                            return(
                             
                                    <tr key={key}  id="summ_order">
                                    <td>{val.name}</td>
                                    <td>{`${val.washing!=null?'washing':''}${val.ironing!=null?'/ironing':''}${val.bleach!=null?'/bleach':''}${val.towel!=null?'/towel':''}`}</td>
                                    <td>{`${val.quantity} X ${val.washing+val.ironing+val.bleach+val.towel}=`}</td>
                                    <td>{val.quantity*(val.washing+val.ironing+val.bleach+val.towel)}</td>
                                </tr>
                                
                           
                            )
                        })}
                        
                        
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Sub Total:</td>
                            {props.orderstatus?<td>{props.tData.price}</td>:<td>{data.price}</td>}
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Pickup Charges:</td>
                            <td>90</td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr id='grand_total_tr'>
                            <td></td>
                            <td></td>
                            <td>Total :</td>
                            {props.orderstatus?<td>{props.tData.price + 90}</td>:<td> Rs {data.price+90}</td>}
                        </tr>
                        </tfoot>
                        </table>
                    </div>
                </div>
                <div >
                    <div id='add-heading'>Address</div>
                    <div id='Address_box'>
                        <div className='add_container'>
                        {props.orderstatus?"":<input type="radio" id="html" name="address" value="address1" onChange={get_user_add}></input>}
                            <h6>Home</h6>
                            <p>#223, 10th road, Keshav nagar Narnaul</p>
                            
                            </div>
                            {props.orderstatus?"":<div className='add_container'>
                        <input type="radio" id="html" name="address" value="address2" onChange={get_user_add}></input>
                            <h6>Other</h6>
                            <p>#223, 10th road, Keshav nagar Narnaul</p>
                        </div>}
                        {props.orderstatus?"":<div><h5>ADD NEW</h5></div>}

                    </div>
                </div>
                <div id='summ_footer'>
                   {props.orderstatus? <button style={{backgroundColor:"red",padding:"5px"}} onClick={()=>{procced()}}>CancalOrder</button>: <button onClick={confrim_order} style={store_address && user_add?{backgroundColor:'#4552C1'}:{}}>Confirm</button>}
                </div>
            </div>
        </div>
    )
}

export default SummaryPage;