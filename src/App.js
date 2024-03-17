import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUpForm from "./components/signUpForm/SignUpForm";
import Register from "./components/athleteProfile/Register";
import SignInForm from "./components/signInForm/SignInForm";
import Home from "./components/home/Home";
import CoachChat from "./components/coachChat/CoachChat";
import CoachProfile from "./components/coachProfile/CoachProfile";
import CoachList from "./components/coachList/CoachList";
import Logout from "./components/logout/Logout";
import { CoachVideoChat } from "./components/coachVideoChat/CoachVideoChat";
import CoachWithRating from "./components/coachWithRating/CoachWithRating";
import CategoryPage from "./components/categoryPage/CategoryPage";
import LandingPage from "./components/landingPage/LandingPage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/signin" element={<SignInForm />} />
      <Route path="/register" element={<Register />} />
      <Route path="/coaches" element={<CoachList />} />
      <Route path="/home" element={<Home />} />
      <Route path="/coachesRating" element={<CoachWithRating />} />
      <Route path="/coachChat" element={<CoachChat />} />
      <Route path="/coachProfile" element={<CoachProfile />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/coachVideoChat" element={<CoachVideoChat />} />
      <Route path="/category/:sport" element={<CategoryPage />} />
    </Routes>
  );
};

export default App;
