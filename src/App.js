import FooterNav from './FooterNavComp/footerNav';
import Navbar from './HeaderComp/navbar';
import LogInForm from './LogInComp/login';
import HomeSection from './SectionOne/home';
import CopyRight from './FooterComp/copyright'

import Order from './Orderpage/Orderpage';
import './App.css'
import SuccessPopUp from './SucessPopUp/popUp';
import SummaryPage from './SummaryPage/summary';
import { useState } from 'react';
import Spinner from './spinner/spinner';
// import Userdetails from './userDetails/User';



function App() {
  const [spinner,setSpinner] = useState(false);
  return (
    <>
      {spinner? <Spinner/>:""}
      <Navbar />
      <div id='two_section'>
        <HomeSection />
        <LogInForm loder={setSpinner}/>
      </div>
      <FooterNav />
      <CopyRight />
    </>
  );
}

export default App;
