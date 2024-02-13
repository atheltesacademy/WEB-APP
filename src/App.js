import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpage from './components/Mainpage';
// import SignUp from './components/SignUp';
import SignUpForm from './components/SignUpForm';
import Register from './components/Register';
import SignInForm from './components/SignInForm';
import ChatCard from './components/CoachCard';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import LandingPage2 from './components/LandingPage2';
import LandingPage3 from './components/LandingPage3';
import LandingPage4 from './components/LandingPage4';
import RatingComponent from './components/RatingComponent';
import ProductReview from './components/ProductReview';
import AboutPage from './components/AboutPage';
import WithRating from './components/CoachWithRating';
import CoachChat from './components/CoachChat';
import NavigationBar from './components/NavigationBar';


// import CoachProfileWithRatings from './components/CoachProfileWithRatings';

const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/"  element={<Mainpage />} />
        {/* <Route path="/Sign-Up"  element={<SignUp />} /> */}
        <Route path="/SignUp-from"  element={<SignUpForm />} />
        <Route path="/SignIn-from"  element={<SignInForm />} />

        <Route path="/Regi-ster"  element={<Register />} />
        <Route path='/SignIn-Form' element={<SignInForm/>}/>
        <Route path='/Chat-Card' element={<ChatCard/>}/>
        <Route path='/Home-jsx' element={<Home/>}/>
        {/* <Route path='/CoachProfile-WithRatings' element={<CoachProfileWithRatings/>}/> */}

        <Route path='/Landing-Page' element={<LandingPage/>}/>
        <Route path='/Landing-Page2' element={<LandingPage2/>}/>
        <Route path='/Landing-Page3' element={<LandingPage3/>}/>
        <Route path='/Landing-Page4' element={<LandingPage4/>}/>
        <Route path='/Rating-Component' element={<RatingComponent/>}/>
        <Route path='/Product-Review' element={<ProductReview/>}/>
        <Route path='/About-Page' element={<AboutPage/>}/>
        <Route path='/CoachCard-WithRating' element={<WithRating/>}/>
        <Route path='/Coach-Chat' element={<CoachChat/>}/>
<Route path='/Navigation-Bar' element={<NavigationBar/>}/>




      
      </Routes>
    </Router>
  );
};

export default App;
