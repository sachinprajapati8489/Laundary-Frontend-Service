import "./cancal.css"
import Alert_icon from "./triangle-exclamation-solid.svg"
let Cancal = (props) => {
    function status_Cancle() {
        props.setcan(false)
        props.flag(true);
        props.st_cancle();
        
    }


    return (
        <>
            <div id="cancal-outer">
                <div id="cancal-inner">
                    <div id="cancalheader">
                        <div id="cancal-alert">
                            <div className="margin_left"><h3>Alert</h3></div>
                            <div className="margin_right"><h1 id="cancal-cross" onClick={() => props.setcan(false)}>X</h1></div>
                        </div>
                        <div className="ca_alert_msg">
                            <div id="cancal-img"><img src={Alert_icon} alt="alert-icon" /></div>
                            <div id="cancal-ptag"><p >Are you sure you want cancal the order: {props.orderId}</p></div>
                        </div>
                        <div id="cancal-button">
                            <button 
                            onClick={()=>{status_Cancle()}} className='btn  bg_color_btn'>proceed</button></div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Cancal