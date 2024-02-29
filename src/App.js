import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Mainpage from './components/mainPage/Mainpage';
import SignUpForm from './components/signUpForm/SignUpForm';
import Register from './components/athleteProfile/Register';
import SignInForm from './components/signInForm/SignInForm';
import Home from './components/home/Home';
import Coachprofile from './components/coachProfile/Coachprofile';
import CoachId from './components/coachId/CoachId';
import Logout from './components/logout/Logout';
import { WalletRecharge } from './components/walletRecharge/WalletRecharge';
import { AddMoney } from './components/addMoney/AddMoney';
import { WalletCoachBalance } from './components/walletCoachBalance/WalletCoachBalance';
import { CoachReferral } from './components/coachReferral/CoachReferral';
import { CoachVideoChat } from './components/coachVideoChat/CoachVideoChat';
import CoachWithRating from './components/coachWithRating/CoachWithRating';
import LandingPage from './components/landingPage/LandingPage';
import { Blog } from './components/blogPage/Blog';
import CoachChat from './components/coachChat/CoachChat';
import { CoachJourney } from './components/coachJourney/CoachJourney';

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
        <Route path='/coachesRating' element={<CoachWithRating />} />
        <Route path='/coachChat' element={<CoachChat />} />
        <Route path='/coachProfile' element={<Coachprofile />} />
        <Route path='/logout' element={<Logout />} />
        {/* <Route path='/coachVideoChat' element={<CoachVideoChat />} /> */}
        <Route path='/category/:sport' element={<LandingPage />} />
        <Route path='/Coach-video-chat' element={<CoachVideoChat />} />
        <Route path='/wallet-recharge' element={<WalletRecharge />} />
        <Route path='/add-money' element={<AddMoney />} />
        <Route path='/wallet-coach-balance' element={<WalletCoachBalance />} />
        <Route path='/coach-referral' element={<CoachReferral />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/coach-journey' element={<CoachJourney />} />
      </Routes>
    </>
  );
};

export default App;
