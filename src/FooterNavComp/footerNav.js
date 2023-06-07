
import './footernav.css'
function FooterNav() {
    return (

        <div id='footer'>
            <div>
                <section className='refer_container'>
                    <h4>Now Refer & Earn 500 for every referral*</h4>
                    <h6><i>* Terms and conditions will be applied</i></h6>
                </section>
                <section className='footer_navlinks'>
                    <ul>
                        <li>ABOUT US</li>
                        <li>Doorstep Wash & Dryclean Service</li>
                    </ul>
                    <ul id="footer_nav_hm_r">
                    <ul>
                        <li>Home</li>
                        <li>Sign In</li>
                        <li>Register</li>
                    </ul>
                    <ul>
                        <li>Pricing</li>

                    </ul>
                    <ul>
                        <li>Career</li>
                        <li>Blogs</li>
                        <li>Create</li>
                    </ul>
                    <ul>
                        <li>Contact</li>
                    </ul>
                    </ul>
                    <ul>
                        <li>SOCIAL MEDIA</li>
                        <li id='footer_icons'>
                            <img src='./projecIimages/facebook.svg' alt='facebook' />
                            <img src='./projecIimages/instagram.svg' alt='instagram' />
                            <img src='./projecIimages/linkedin.svg' alt='linkedin' />
                        </li>

                    </ul>
                </section>
            </div>
        </div>
    )
}
export default FooterNav;
