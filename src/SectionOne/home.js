import { Link } from "react-router-dom";
import './home.css'



   
function HomeSection(props) {
  console.log(props.change_login)

  return (
    <div id="main_logo_cont" style={props.change_login?{width:"100%"}:{}}>
      <section className="home"style={props.change_login?{margin:'8%',marginTop:'30%',width:'0%',flexWrap: 'no-warp'}:{}} >
      <div>
        <h1 >Laundry <br /> Service</h1>
      </div>
      <div>
  
          <p>
          Doorstep Wash & Dryclean Service
          </p>
      </div>
      <div>
      <h6>
          {props.change_login?"Alredy Have Account":'Don`t Have An Account'}
        </h6>
        <Link to={props.change_login?'/':'/register'} ><button >{props.change_login?"Sign In":"Register"}</button> </Link>
      </div>
    </section>
    <div id="blue_line_cont">
      <div id="blue_line"></div>
    </div>
    </div>
  )
}
export default HomeSection;