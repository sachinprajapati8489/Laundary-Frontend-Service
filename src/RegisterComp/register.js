import { useRef, useState } from "react";
import axios  from 'axios'
import Navbar from "../HeaderComp/navbar";
import HomeSection from "../SectionOne/home";
import FooterNav from "../FooterNavComp/footerNav";
import CopyRight from "../FooterComp/copyright";
import './register.css'
import { Link,  } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Spinner from "../spinner/spinner";


const Url = "https://laundary-backend-service.onrender.com/register"
function RegisterPage(){
    const [spin,setSpin] = useState(false)
    const form_data = useRef();
    let navigate = useNavigate();
    const [reg_user, set_userDetails] = useState({})
    const [get_check_d , set_check_d] = useState(false)
    async function Reg_User(e){
        e.preventDefault()
        setSpin(true);
        console.log(reg_user)
        const  data = {
            name:form_data.current.name.value,
            email:form_data.current.email.value,
            phone:form_data.current.phone.value,
            state:form_data.current.state.value,
            district:form_data.current.district.value,
            address:form_data.current.address.value,
            pincode:form_data.current.pincode.value,
            password:form_data.current.password.value
        }
        console.log(data)
        if(get_check_d){
            const response = await axios.post(Url,data)
        console.log(response.status)
        if(response.status === 200){
            navigate('/')
        }
        else {
            alert('Please Select Term & Condition')
            setSpin(false)
        }
        
    }
    }
    return(
        <>
            {spin?<Spinner/>:""}
            <Navbar/>
            <div id="reg_container">
                <div id="right_side_cont">
                    <HomeSection change_login={true}/>
                </div>
                <div id="form_container">
                    <h1>REGISTER</h1>
                    <form ref={form_data}>
                        <div>
                        <input type="text" placeholder="Name" id="name"
                         onChange={(e)=>{set_userDetails({...reg_user,name:e.target.value})}}/>
                        <input type="email" placeholder="Email" id="email" required={true} 
                        onChange={(e)=>{set_userDetails({...reg_user,email:e.target.value})}}/>
                        </div>
                        <div>
                        <input type="tel" placeholder="Phone" id="phone" 
                        onChange={(e)=>{set_userDetails({...reg_user,phone:e.target.value})}}/>
                        <input type="text" placeholder="State" id="state"
                        onChange={(e)=>{set_userDetails({...reg_user,state:e.target.value})}} />
                        </div>
                        <div>
                        <input type="text" placeholder="District" id="district" 
                        onChange={(e)=>{set_userDetails({...reg_user,district:e.target.value})}}/>
                        <input type="text" placeholder="Address" id="address"
                         onChange={(e)=>{set_userDetails({...reg_user,address:e.target.value})}}/>
                        </div>
                        <div>
                        <input type="text" placeholder="Pincode" id="pincode" 
                        onChange={(e)=>{set_userDetails({...reg_user,pincode:e.target.value})}}/>
                        <input type="password" placeholder="Password" id="password" minLength={8} maxLength={16}
                        onChange={(e)=>{set_userDetails({...reg_user,password:e.target.value})}}/>
                        </div>
                        <div id="check_box">
                            <input type={'checkbox'} id="checkbox" onChange={()=>set_check_d(true)}/>
                            <label htmlFor="checkbox"><Link to="#">I agree to Terms & Condition receiving marketing and promotional materials</Link></label>
                        </div>
                        <div>
                        <button onClick={Reg_User}id='reg_btn'>Register</button>
                        </div>
                    </form>
                </div>
            </div>
            <FooterNav/>
            <CopyRight/>
        </>
    )
}

export default RegisterPage;