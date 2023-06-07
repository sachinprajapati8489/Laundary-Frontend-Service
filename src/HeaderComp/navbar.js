import React from "react";
import './navbar.css'


function Navbar (props){
    const After_Login = props.After_Login;
    const user_name = props.name
   

    
    function logout_user(){
        window.localStorage.clear("token");
        
              // Force a reload if the user has logged out.
              window.location.href = '/';
            //   window.location.reload();
              
    }
    return(
        <div className="header_nav">
            <div id="logo_name">LAUNDRY</div>
            <div className="nav_links">
                <style></style>
                <ul>
                    {After_Login?"":<li>Home</li>}
                    <li>Pricing</li>
                    <li>Career</li>
                    {After_Login?<li>{user_name}</li>:<li>Sign In</li>}
                    {After_Login?<li onClick={logout_user}>Log Out</li>:""}

                </ul>
            </div>
        </div>
    )
}


export default Navbar