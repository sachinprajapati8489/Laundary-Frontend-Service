
import { useNavigate } from 'react-router-dom'
import './popUo.css'

function SuccessPopUp(){
    let navigate = useNavigate();
    function user_details_page(){
        navigate('/userdetails')
    }
    return (
        <>
            <div className="outer_cont">
                <div id='massage_cont'>
                    <div id='conten_cont'>
                    <img src='./projecIimages/sucessfulllogo.jpg' alt='success logo' />
                    <h6>Your order is successfully.</h6>
                    <p>You can track the delivery in the "Orders" section.</p>
                    <button onClick={user_details_page}>Go to orders</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SuccessPopUp