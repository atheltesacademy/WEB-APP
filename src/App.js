import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage';
import CoachList from './CoachList';
import LogoutPage from './LogoutPage';
import ChatBot from './ChatBot';

function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/coaches/:sport" component={CoachList} />
          <Route path="/logout" exact component={LogoutPage} />
        </Switch>
    </Router>
    <ChatBot />
    </>
  );
}

export default App;
