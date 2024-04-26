import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Counsellor from './components/Counsellor'
import BookingForm from './components/BookingForm';
import StudentHome from './components/StudentHome';
import CounsellorHome from './components/CounsellorHome';
import AdminHome from './components/AdminHome';
import StudentAppointments from './components/StudentAppointments';
import Addcounsellor from './components/Addcounsellor';
import SignUpDetails from './components/SignUpDetails';
import BookingDetails from './components/BookingDetails';
import ContactUsDetails from './components/ContactUsDetails';
import CounsellorDetails from './components/CounsellorDetails';
import CounsellorAppointments from './components/CounsellorAppointments';
import ForgotPassword from './components/ForgotPassword';
import AboutUs from './components/AboutUs';
import FeedBack from './components/FeedBack';
import FeedBackDetails from './components/FeedBackDetails';
import UpdateCounsellor from './components/UpdateCounsellor';
import DeleteCounsellor from './components/DeleteCounsellor';

function App({store}) {
  return <React.Fragment>
    <header>
      <Navbar/>
    </header>


    <main>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/signin' element={<Signin store={store}/>} exact/>
        <Route path='/signup' element={<Signup/>} exact/>
        <Route path='/contact-us' element={<ContactUs/>} exact/>
        <Route path='/student-home' element={<StudentHome/>} exact/>
        <Route path='/counsellor-home' element={<CounsellorHome/>} exact/>
        <Route path='/admin-home' element={<AdminHome/>} exact/>
        <Route path='/student-appointments' element={<StudentAppointments/>} exact/>
        <Route path='/counsellor' element={<Counsellor/>} exact/>
        <Route path="/booking-form" element={<BookingForm />} />
        <Route path='/add-counsellor' element={<Addcounsellor/>} exact/>
        <Route path='/update-counsellor' element={<UpdateCounsellor/>} exact/>
        <Route path='/delete-counsellor' element={<DeleteCounsellor/>} exact/>
        <Route path='/sign-up-details' element={<SignUpDetails/>} exact/>
        <Route path='/booking-details' element={<BookingDetails/>} exact/>
        <Route path='/contact-us-details' element={<ContactUsDetails/>} exact/>
        <Route path='/counsellor-details' element={<CounsellorDetails/>} exact/>
        <Route path='/counsellor-appointments' element={<CounsellorAppointments/>} exact/>
        <Route path='/forgot-password' element={<ForgotPassword/>} exact/>
        <Route path='/about-us' element={<AboutUs/>} exact/>
        <Route path='/feedback' element={<FeedBack/>} exact/>
        <Route path='/feedback-details' element={<FeedBackDetails/>} exact/>

      </Routes>
    </main>

    

    </React.Fragment>
}

export default App;
