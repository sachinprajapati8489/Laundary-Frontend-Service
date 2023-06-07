
import '../Createorderpage/Order.css'
import Orderpagesidebar from '../Orderpagesidebar'
import CopyRight from '../../FooterComp/copyright'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from '../../HeaderComp/navbar'
import SummaryPage from '../../SummaryPage/summary'
function Orderpage() {
    let url='https://laundary-backend-service.onrender.com/successfulLogin'
    let token=window.localStorage.getItem('token')
    let [userN,setuserN]=useState('')
    useEffect(()=>{
        fetch(url,{ method :'get',  headers:{authorization:token}} ).then((res)=>res.json()).then((data)=>setuserN(data.post[0].name))
    },[])
    const [shirt, setshirt] = useState({ name:'shirt',quantity: 0, washing: null, ironing: null, towel: null, bleach: null})
    let calculationshirt = shirt.washing + shirt.ironing + shirt.bleach + shirt.towel

    // console.log(calculationshirt,shirt)

    const [tshirt, settshirt] = useState({name:'tshirt', quantity: 0, washing: null, ironing: null, towel: null, bleach: null })
    let calculationtshirt=tshirt.washing + tshirt.ironing + tshirt.bleach + tshirt.towel
    // console.log(calculationtshirt,tshirt)

    
    const [trousers, settrousers] = useState({ name:'trousers',quantity: 0, washing: null, ironing: null, towel: null, bleach: null })
    let calculationtrousers=trousers.washing + trousers.ironing + trousers.bleach + trousers.towel
    // console.log(calculationtrousers,trousers)

    const [jeans, setjeans] = useState({ name:'jeans',quantity: 0, washing: null, ironing: null, towel: null, bleach: null })
    let calculationjeans=jeans.washing + jeans.ironing + jeans.bleach + jeans.towel
    // console.log(calculationjeans,jeans)

    const [boxer, setboxer] = useState({ name:'boxer',quantity: 0, washing: null, ironing: null, towel: null, bleach: null })
    let calculationboxer=boxer.washing + boxer.ironing + boxer.bleach + boxer.towel
    // console.log(calculationboxer,boxer)

    const [jogger, setjogger] = useState({ name:'jogger',quantity: 0, washing: null, ironing: null, towel: null, bleach: null })
    let calculationjogger=jogger.washing + jogger.ironing + jogger.bleach + jogger.towel
    // console.log(calculationjogger,jogger)


    const [others, setothers] = useState({ name:'other',quantity: 0, washing: null, ironing: null, towel: null, bleach: null })
    let calculationothers=others.washing + others.ironing + others.bleach + others.towel
    // console.log(calculationothers,others)

    let itemarry=[shirt,tshirt,trousers,jeans,boxer,jogger,others]
    // useEffect(()=>{
    //     for(let i=0;i<itemarry.length;i++){
    //         if(itemarry[i].quantity==0){
    //             itemarry.splice(i,1)
    //         }
    //     }
    // },[])
    let [cr_summary,setcr_summary]=useState(false)
    let selecteditem=[]
    console.log('......',selecteditem)
    return (
        <div>
            {/* <Orderpagenav></Orderpagenav> */}
           {cr_summary? <SummaryPage itemarry={selecteditem} cr_summary={setcr_summary}></SummaryPage>:''}
            <Navbar After_Login={true} name={userN} ></Navbar>
            <span style={{ 'marginLeft': '30px', 'fontSize': '18px' }}> order</span>
            <span id='inputsearch'> <span><img src={require('../logo/search.jpg')} id='simg' ></img></span><input></input></span>
            <div className='op'>
                <Orderpagesidebar></Orderpagesidebar>
            </div >
            <div className='op' id='Tablediv'>

                <table>
                    <thead>
                        <tr>
                            <th style={{ 'width': '450px' }}>product type</th>
                            <th style={{ 'width': '60px' }}>quantity</th>
                            <th style={{ 'width': '400px' }}>wash type</th>
                            <th style={{ 'textAlign': 'center' }}>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div id='productdiv'>
                                    <div id='tableimg'>
                                        <img src={require('../logo/shirt.jpg')} style={{ 'width': '100%', 'height': '100%' }}></img>
                                    </div>
                                    <div><span>shirt</span>
                                        <br></br>
                                        <span style={{ 'fontSize': '13px', 'color': '#76788B' }}> Lorem ipsum is a placeholder text commonly </span></div>
                                </div>
                            </td>

                            <td className='tableinput'><input type='number' placeholder='0' onChange={(e) => { setshirt({ ...shirt, quantity:Number(e.target.value)}) }}></input></td>
                            <td> <div id='imagesection'>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { setshirt({ ...shirt, washing: 15}) }}>
                                    {shirt.washing > 0 ? <> <img src={require('../logo/washing-machinelight.png')}></img></> : <> <img src={require('../logo/washing-machine.png')}></img> </>}
                                </div>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { setshirt({ ...shirt, ironing: 20 }) }} >
                                    {shirt.ironing>0?<><img src={require('../logo/ironinglight.png')}></img></>:<>  <img src={require('../logo/ironing.png')}></img> </>}
                                   
                                    </div>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { setshirt({ ...shirt, towel: 25 }) }}><img src={require('../logo/towel.png')}></img></div>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { setshirt({ ...shirt, bleach: 30, }) }}>
                                    {
                                        shirt.bleach>0?<>  <img src={require('../logo/bleachlight.png')}></img></>:<>  <img src={require('../logo/bleach.png')}></img></>
                                    }
                                    </div>
                            </div></td>
                            <td><div style={{ 'width': '100%', 'display': 'flex', 'justifyContent': 'space-around',fontSize:'24px' }}>
                                {(shirt.quantity > 0) ? <>{shirt.quantity +' '+ 'X'+' ' + calculationshirt + '='}< span style={{color:'#5861AE'}}  >{calculationshirt * shirt.quantity}</span> <button style={{ 'float': 'right','width':'81px','height' :'30px','border':'1px solid #5861AE','color':'#5861AE',borderRadius:'3px' }} onClick={()=>{setshirt({...shirt,towel:0,ironing:0,bleach:0,washing:0,quantity:0,total:0})}}>Reset</button>
                                </> : <>-</>}</div></td>
                        </tr>




                        <tr>
                            <td>
                                <div id='productdiv'>
                                    <div id='tableimg'>
                                        <img src={require('../logo/t-shirts.jpg')} style={{ 'width': '100%', 'height': '100%' }}></img>
                                    </div>
                                    <div><span>T-shirt</span>
                                        <br></br>
                                        <span style={{ 'fontSize': '13px', 'color': '#76788B' }}> Lorem ipsum is a placeholder text commonly </span></div>
                                </div>
                            </td>

                            <td className='tableinput'><input type='number' placeholder='0' onChange={(e) => { settshirt({ ...tshirt, quantity: e.target.value }) }}></input></td>
                            <td> <div id='imagesection'>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { settshirt({ ...tshirt, washing: 15 }) }}>
                                    {tshirt.washing > 0 ? <> <img src={require('../logo/washing-machinelight.png')}></img></> : <> <img src={require('../logo/washing-machine.png')}></img> </>}
                                </div>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { settshirt({ ...tshirt, ironing: 20 }) }} >
                                    {tshirt.ironing>0?<><img src={require('../logo/ironinglight.png')}></img></>:<>  <img src={require('../logo/ironing.png')}></img> </>}
                                   
                                    </div>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { settshirt({ ...tshirt, towel: 25 }) }}><img src={require('../logo/towel.png')}></img></div>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { settshirt({ ...tshirt, bleach: 30 }) }}>
                                    {
                                        tshirt.bleach>0?<>  <img src={require('../logo/bleachlight.png')}></img></>:<>  <img src={require('../logo/bleach.png')}></img></>
                                    }
                                    </div>
                            </div></td>
                            <td><div style={{ 'width': '100%', 'display': 'flex', 'justifyContent': 'space-around',fontSize:'24px' }}>
                                {(tshirt.quantity > 0) ? <>{tshirt.quantity +  ' '+ 'X'+' ' + calculationtshirt + '='}<span  style={{color:'#5861AE'}}>{calculationtshirt * tshirt.quantity}</span> <button style={{ 'float': 'right','width':'81px','height' :'30px','border':'1px solid #5861AE','color':'#5861AE',borderRadius:'3px'}} onClick={()=>{settshirt({...tshirt,towel:0,ironing:0,bleach:0,washing:0,quantity:0})}}>Reset</button>
                                </> : <>-</>}</div></td>
                        </tr>





                        <tr>
                            <td>
                                <div id='productdiv'>
                                    <div id='tableimg'>
                                        <img src={require('../logo/Trousers.jpg')} style={{ 'width': '100%', 'height': '100%' }}></img>
                                    </div>
                                    <div><span>Trousers</span>
                                        <br></br>
                                        <span style={{ 'fontSize': '13px', 'color': '#76788B' }}> Lorem ipsum is a placeholder text commonly </span></div>
                                </div>
                            </td>

                            <td className='tableinput'><input type='number' placeholder='0' onChange={(e) => { settrousers({ ...trousers, quantity: e.target.value }) }}></input></td>
                            <td> <div id='imagesection'>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { settrousers({ ...trousers, washing: 15 }) }}>
                                    {trousers.washing > 0 ? <> <img src={require('../logo/washing-machinelight.png')}></img></> : <> <img src={require('../logo/washing-machine.png')}></img> </>}
                                </div>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { settrousers({ ...trousers, ironing: 20 }) }} >
                                    {trousers.ironing>0?<><img src={require('../logo/ironinglight.png')}></img></>:<>  <img src={require('../logo/ironing.png')}></img> </>}
                                   
                                    </div>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { settrousers({ ...trousers, towel: 25 }) }}><img src={require('../logo/towel.png')}></img></div>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { settrousers({ ...trousers, bleach: 30 }) }}>
                                    {
                                        trousers.bleach>0? <> <img src={require('../logo/bleachlight.png')}></img></>:<>  <img src={require('../logo/bleach.png')}></img></>
                                    }
                                    </div>
                            </div></td>
                            <td><div style={{ 'width': '100%', 'display': 'flex', 'justifyContent': 'space-around',fontSize:'24px' }}>
                                {(trousers.quantity > 0) ? <>{trousers.quantity +  ' '+ 'X'+' ' + calculationtrousers + '='}<span  style={{color:'#5861AE'}}>{calculationtrousers * trousers.quantity}</span> <button style={{ 'float': 'right','width':'81px','height' :'30px','border':'1px solid #5861AE','color':'#5861AE',borderRadius:'3px'}} onClick={()=>{settrousers({...trousers,towel:0,ironing:0,bleach:0,washing:0,quantity:0})}}>Reset</button>
                                </> : <>-</>}</div></td>
                        </tr>




                        <tr>
                            <td>
                                <div id='productdiv'>
                                    <div id='tableimg'>
                                        <img src={require('../logo/jeans.jpg')} style={{ 'width': '100%', 'height': '100%' }}></img>
                                    </div>
                                    <div><span>Jeans</span>
                                        <br></br>
                                        <span style={{ 'fontSize': '13px', 'color': '#76788B' }}> Lorem ipsum is a placeholder text commonly </span></div>
                                </div>
                            </td>

                            <td className='tableinput'><input type='number' placeholder='0' onChange={(e) => { setjeans({ ...jeans, quantity: e.target.value }) }}></input></td>
                            <td> <div id='imagesection'>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { setjeans({ ...jeans, washing: 15 }) }}>
                                    {jeans.washing > 0 ? <> <img src={require('../logo/washing-machinelight.png')}></img></> : <> <img src={require('../logo/washing-machine.png')}></img> </>}
                                </div>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { setjeans({ ...jeans, ironing: 20 }) }} >
                                    {jeans.ironing>0?<><img src={require('../logo/ironinglight.png')}></img></>:<>  <img src={require('../logo/ironing.png')}></img> </>}
                                   
                                    </div>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { setjeans({ ...jeans, towel: 25 }) }}><img src={require('../logo/towel.png')}></img></div>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { setjeans({ ...jeans, bleach: 30 }) }}>
                                    {
                                        jeans.bleach>0? <> <img src={require('../logo/bleachlight.png')}></img></>:<>  <img src={require('../logo/bleach.png')}></img></>
                                    }
                                    </div>
                            </div></td>
                            <td><div style={{ 'width': '100%', 'display': 'flex', 'justifyContent': 'space-around',fontSize:'24px' }}>
                                {(jeans.quantity > 0) ? <>{jeans.quantity +  ' '+ 'X'+' ' + calculationjeans + '='}<span  style={{color:'#5861AE'}}>{calculationjeans * jeans.quantity}</span> <button style={{ 'float': 'right','width':'81px','height' :'30px','border':'1px solid #5861AE','color':'#5861AE',borderRadius:'3px'}} onClick={()=>{setjeans({...jeans,towel:0,ironing:0,bleach:0,washing:0,quantity:0})}}>Reset</button>
                                </> : <>-</>}</div></td>
                        </tr>





                        <tr>
                            <td>
                                <div id='productdiv'>
                                    <div id='tableimg'>
                                        <img src={require('../logo/boxers.jpg')} style={{ 'width': '100%', 'height': '100%' }}></img>
                                    </div>
                                    <div><span>Boxer</span>
                                        <br></br>
                                        <span style={{ 'fontSize': '13px', 'color': '#76788B' }}> Lorem ipsum is a placeholder text commonly </span></div>
                                </div>
                            </td>

                            <td className='tableinput'><input type='number' placeholder='0' onChange={(e) => { setboxer({ ...boxer, quantity: e.target.value }) }}></input></td>
                            <td> <div id='imagesection'>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { setboxer({ ...boxer, washing: 15 }) }}>
                                    {boxer.washing > 0 ? <> <img src={require('../logo/washing-machinelight.png')}></img></> : <> <img src={require('../logo/washing-machine.png')}></img> </>}
                                </div>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { setboxer({ ...boxer, ironing: 20 }) }} >
                                    {boxer.ironing>0?<><img src={require('../logo/ironinglight.png')}></img></>:<>  <img src={require('../logo/ironing.png')}></img> </>}
                                   
                                    </div>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { setboxer({ ...boxer, towel: 25 }) }}><img src={require('../logo/towel.png')}></img></div>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { setboxer({ ...boxer, bleach: 30 }) }}>
                                    {
                                        boxer.bleach>0? <> <img src={require('../logo/bleachlight.png')}></img></>:<>  <img src={require('../logo/bleach.png')}></img></>
                                    }
                                    </div>
                            </div></td>
                            <td><div style={{ 'width': '100%', 'display': 'flex', 'justifyContent': 'space-around',fontSize:'24px' }}>
                                {(boxer.quantity > 0) ? <>{boxer.quantity +  ' '+ 'X'+' ' + calculationboxer + '='}<span  style={{color:'#5861AE'}}>{calculationboxer * boxer.quantity}</span> <button style={{ 'float': 'right','width':'81px','height' :'30px','border':'1px solid #5861AE','color':'#5861AE',borderRadius:'3px'}} onClick={()=>{setboxer({...boxer,towel:0,ironing:0,bleach:0,washing:0,quantity:0})}}>Reset</button>
                                </> : <>-</>}</div></td>
                        </tr>




                        <tr>
                            <td>
                                <div id='productdiv'>
                                    <div id='tableimg'>
                                        <img src={require('../logo/joggers.jpg')} style={{ 'width': '100%', 'height': '100%' }}></img>
                                    </div>
                                    <div><span>Joggers</span>
                                        <br></br>
                                        <span style={{ 'fontSize': '13px', 'color': '#76788B' }}> Lorem ipsum is a placeholder text commonly </span></div>
                                </div>
                            </td>

                            <td className='tableinput'><input type='number' placeholder='0' onChange={(e) => { setjogger({ ...jogger, quantity: e.target.value }) }}></input></td>
                            <td> <div id='imagesection'>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { setjogger({ ...jogger, washing: 15 }) }}>
                                    {jogger.washing > 0 ? <> <img src={require('../logo/washing-machinelight.png')}></img></> : <> <img src={require('../logo/washing-machine.png')}></img> </>}
                                </div>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { setjogger({ ...jogger, ironing: 20 }) }} >
                                    {jogger.ironing>0?<><img src={require('../logo/ironinglight.png')}></img></>:<>  <img src={require('../logo/ironing.png')}></img> </>}
                                   
                                    </div>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { setjogger({ ...jogger, towel: 25 }) }}><img src={require('../logo/towel.png')}></img></div>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { setjogger({ ...jogger, bleach: 30 }) }}>
                                    {
                                        jogger.bleach>0? <> <img src={require('../logo/bleachlight.png')}></img></>:<>  <img src={require('../logo/bleach.png')}></img></>
                                    }
                                    </div>
                            </div></td>
                            <td><div style={{ 'width': '100%', 'display': 'flex', 'justifyContent': 'space-around',fontSize:'24px' }}>
                                {(jogger.quantity > 0) ? <>{jogger.quantity +  ' '+ 'X'+' ' + calculationjogger + '='}<span  style={{color:'#5861AE'}}>{calculationjogger * jogger.quantity}</span> <button style={{ 'float': 'right','width':'81px','height' :'30px','border':'1px solid #5861AE','color':'#5861AE',borderRadius:'3px'}} onClick={()=>{setjogger({...jogger,towel:0,ironing:0,bleach:0,washing:0,quantity:0})}}>Reset</button>
                                </> : <>-</>}</div></td>
                        </tr>


                        <tr>
                            <td>
                                <div id='productdiv'>
                                    <div id='tableimg'>
                                        <img src={require('../logo/other.jpg')} style={{ 'width': '100%', 'height': '100%' }}></img>
                                    </div>
                                    <div><span>Others</span>
                                        <br></br>
                                        <span style={{ 'fontSize': '13px', 'color': '#76788B' }}> Lorem ipsum is a placeholder text commonly </span></div>
                                </div>
                            </td>

                            <td className='tableinput'><input type='number' placeholder='0' onChange={(e) => { setothers({ ...others, quantity: e.target.value }) }}></input></td>
                            <td> <div id='imagesection'>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { setothers({ ...others, washing: 15 }) }}>
                                    {others.washing > 0 ? <> <img src={require('../logo/washing-machinelight.png')}></img></> : <> <img src={require('../logo/washing-machine.png')}></img> </>}
                                </div>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { setothers({ ...others, ironing: 20 }) }} >
                                    {others.ironing>0?<><img src={require('../logo/ironinglight.png')}></img></>:<>  <img src={require('../logo/ironing.png')}></img> </>}
                                   
                                    </div>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { setothers({ ...others, towel: 25 }) }}><img src={require('../logo/towel.png')}></img></div>
                                <div style={{ 'width': '25px', 'height': '25px' }} onClick={(e) => { setothers({ ...others, bleach: 30 }) }}>
                                    {
                                        others.bleach>0? <> <img src={require('../logo/bleachlight.png')}></img></>:<>  <img src={require('../logo/bleach.png')}></img></>
                                    }
                                    </div>
                            </div></td>
                            <td><div style={{ 'width': '100%', 'display': 'flex', 'justifyContent': 'space-around',fontSize:'24px' }}>
                                {(others.quantity > 0) ? <>{others.quantity +  ' '+ 'X'+' ' + calculationothers + '='}<span  style={{color:'#5861AE'}}>{calculationothers * others.quantity}</span> <button style={{ 'float': 'right','width':'81px','height' :'30px','border':'1px solid #5861AE','color':'#5861AE',borderRadius:'3px'}} onClick={()=>{setothers({...others,towel:0,ironing:0,bleach:0,washing:0,quantity:0})}}>Reset</button>
                                </> : <>-</>}</div></td>
                        </tr>




                    </tbody>
                </table>
                <div id='navbutton'>
                    <Link to='/Cardorderpage'>                    <div><button style={{ 'border': '1px solid #5861AE', 'color': '#5861AE', 'width': '85px', 'height': '32px', 'borderRadius': '3px' }}>Cancal</button></div></Link>
                       <div><button onClick={()=>setcr_summary(true)} style={{ 'border': '1px solid #5861AE', 'color': '#FFFFFF', 'width': '85px', 'height': '32px', 'backgroundColor': '#5861AE', 'borderRadius': '3px' }}>Proceed</button></div>
                 

                </div>
            </div>
            <CopyRight></CopyRight>
            {
                itemarry.map((value,i)=>{
                    if(value.quantity!=0){
                        selecteditem.push(value)
                    }
                })
            }
        </div>
    )
}
export default Orderpage