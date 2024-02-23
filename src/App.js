import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Mainpage from './components/mainPage/Mainpage';
// import SignUp from './components/SignUp';
import SignUpForm from './components/signUpForm/SignUpForm';
import Register from './components/athleteProfile/Register';
import SignInForm from './components/signInForm/SignInForm';
// import ChatCard from './components/coachId/CoachId';
import Home from './components/home/Home';
import LandingPage from './components/landingPage/LandingPage';
import LandingPage2 from './components/landingPage/LandingPage2';
import LandingPage3 from './components/landingPage/LandingPage3';
import LandingPage4 from './components/landingPage/LandingPage4';
// import RatingComponent from './components/RatingComponent';
import WithRating from './components/coachWithRating/CoachWithRating';
import CoachChat from './components/coachChat/CoachChat';
import NavigationBar from './components/navigation/NavigationBar';
import Coachprofile from './components/coachProfile/Coachprofile';
import CoachId from './components/coachId/CoachId';
// import Chat from './components/video/VideoChat';
import Logout from './components/logout/Logout';
import { CoachVideoChat } from './components/coachVideoChat/CoachVideoChat';
// import ChatBot from './components/ChatBot';


// import CoachProfileWithRatings from './components/CoachProfileWithRatings';

const App = () => {
  return (

    <>
      <Routes>
        <Route path="/" element={< Mainpage />} />
        {/* <Route path="/Sign-Up"  element={<SignUp />} /> */}
        <Route path="/SignUp-from" element={<SignUpForm />} />
        <Route path="/SignIn-from" element={<SignInForm />} />

        <Route path="/Regi-ster" element={<Register />} />
        <Route path='/SignIn-Form' element={<SignInForm />} />
        <Route path='/Coach-Id' element={<CoachId />} />
        <Route path='/Home-jsx' element={<Home />} />
        {/* <Route path='/CoachProfile-WithRatings' element={<CoachProfileWithRatings/>}/> */}

        <Route path='/Landing-Page' element={<LandingPage />} />
        <Route path='/Landing-Page2' element={<LandingPage2 />} />
        <Route path='/Landing-Page3' element={<LandingPage3 />} />
        <Route path='/Landing-Page4' element={<LandingPage4 />} />
        {/* <Route path='/Rating-Component' element={<RatingComponent />} /> */}
        <Route path='/With-Rating' element={<WithRating />} />
        <Route path='/Coach-Chat' element={<CoachChat />} />
        <Route path='/Navigation-Bar' element={<NavigationBar />} />
        <Route path='/Coach-profile' element={<Coachprofile />} />
<<<<<<< HEAD
        <Route path='/Video-chat' element={<CoachVideoChat/>} />
=======
        <Route path='/Video-chat' element={<VideoChat />} />
>>>>>>> 3bbee2d5a43523a9a1716d67c78116220d11bba0
        <Route path='/log-out' element={<Logout />} />
        {/* <ChatBot /> */}
        <Route path='/Coach-video-chat' element={<CoachVideoChat />} />

      </Routes>
      {/* // </Router > */}
    </>
  );
};

export default App;
