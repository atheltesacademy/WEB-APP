import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Mainpage from './components/mainPage/Mainpage';
import SignUpForm from './components/signUpForm/SignUpForm';
import Register from './components/athleteProfile/Register';
import SignInForm from './components/signInForm/SignInForm';
import Home from './components/home/Home';
// import LandingPage from './components/landingPage/LandingPage';
// import LandingPage2 from './components/landingPage/LandingPage2';
// import LandingPage3 from './components/landingPage/LandingPage3';
// import LandingPage4 from './components/landingPage/LandingPage4';
import CoachChat from './components/CoachChat/CoachChat';
import Coachprofile from './components/coachProfile/Coachprofile';
import CoachId from './components/coachId/CoachId';
import Logout from './components/logout/Logout';
import { CoachVideoChat } from './components/coachVideoChat/CoachVideoChat';
import CoachWithRating from './components/coachWithRating/CoachWithRating';
// import LandingPageCard from './components/landingPage/LandingPageCard';
import LandingPageToo from './components/landingPage/LandingPage';
import LandingPage from './components/landingPage/LandingPage';
const App = () => {
  return (

    <>
      <Routes>
        <Route path="/" element={< Mainpage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/register" element={<Register />} />
        <Route path='/coachId' element={<CoachId />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path='/landingPage' element={<LandingPage />} /> */}
        {/* <Route path='/Landing-Page2' element={<LandingPage2 />} /> */}
        {/* <Route path='/Landing-Page3' element={<LandingPage3 />} /> */}
        {/* <Route path='/Landing-Page4' element={<LandingPage4 />} /> */}
        <Route path='/coachesRating' element={<CoachWithRating />} />
        <Route path='/coachChat' element={<CoachChat />} />
        <Route path='/coachProfile' element={<Coachprofile />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/coachVideoChat' element={<CoachVideoChat />} />
        {/* <Route path='/LandingPageCard' element={<LandingPageCard />} /> */}
        <Route path='/category/:sport' element={<LandingPage />} />
        

      </Routes>
    </>
  );
};

export default App;
