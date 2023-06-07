import { Link } from 'react-router-dom'
import './Orderpagesidebar.css'
function Orderpagesidebar() {
    return (
        <>
            <div id="sidebar">
                <div className='img' >
                    <div className='imgsec'>
                        <Link to='/userdetails'><img src={require('../logo/home.png')} alt='home logo'/></Link>
                    </div>
                </div>
                <div className='img' id='u'>
                    <div className='imgsec'>
                        <img src={require('../logo/more@2x.png')} alt='create order logo'/>
                    </div>
                </div>
                <div className='img'>
                    <div className='imgsec'>
                        <img src={require('../logo/list@2x.png')} alt='list logo' />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Orderpagesidebar