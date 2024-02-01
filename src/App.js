import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage';
import CoachList from './CoachList';
import ChatBot from './ChatBot';
import  AthleticsAcademy from './components/Page'

import Login from './components/Login';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/coaches/:sport" component={CoachList} />
          <Route path="/coaches/:sport/:id" component={<div>
            <About />
            <RatingComponent />
            <ProductReview />
          </div>
          } />
          <Route path="/user-selection" component={AthleticsAcademy} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
      <ChatBot />
    </>
  );
}

export default App;
