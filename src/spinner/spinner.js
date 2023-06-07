import './spinner.css'

function Spinner(){
    return(
        <div id='spiner_cont'>
            <div className="text-center spiner_cont d-flex justify-content-center" id='spiner_cont'>
                <div className="spinner-border bg_color" role="status" style={{ borderColor: '#4552C1', borderRightColor: 'transparent' }}>
                </div>
                <span >Loading...</span>
            </div>
        </div>
    )
}

export default Spinner;