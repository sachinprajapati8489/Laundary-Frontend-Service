import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import RegisterPage from './RegisterComp/register';
import Order from './Orderpage/Createorderpage/Order';
import Userdetails from './userDetails/User';
import Orderpage from './Orderpage/Orderpage';
import SummaryPage from './SummaryPage/summary';
import SuccessPopUp from './SucessPopUp/popUp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/register' element={<RegisterPage/>} />

            {/* <Route path='/CreateOrder' element={<Order/>}/> */}
            <Route path='/summary' element={<SummaryPage/>}/>
            <Route path='/sucessPopup' element={<SuccessPopUp/>}/>
            <Route path='/userdetails' element={<Userdetails/>} />
            <Route path='/Cardorder' element={<Order/>}/>
            <Route path='/Cardorderpage' element={<Orderpage/>}/>

          </Routes>
        </BrowserRouter>
        </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
