import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage';
import CoachList from './CoachList';
import ChatBot from './ChatBot';
import UserProfileCard from './components/UserProfileCard';


function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/coaches/:sport" component={CoachList} />
        </Switch>
    </Router>
    <ChatBot />
    <div className='userInfo'><UserProfileCard/></div>
    </>
  );
}

export default App;
