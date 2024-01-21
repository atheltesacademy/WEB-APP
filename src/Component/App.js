import React,{useState} from "react";
import "./App.css";
function App() {
  const container = document.getElementById("root");
  const [isLoginActive, setLoginActive] = useState(false);

  const onClickRegister = () => { 
    
    setLoginActive(true)
  };

  const onClickLogin = () => {
  
    setLoginActive(false)
  };

  return (
    <div className={`container ${isLoginActive ? 'active' : ""}`} id="root">
      <div className="form-container sign-up">
        <form>
          <h1>Create Account </h1>
          <div className="social-icons">
            <a href="#" className="icon">
            <i className="fa-brands fa-google-plus-g"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container Login">
        <form>
          <h1>Login </h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button>Login</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back Champion!</h1>
            <p>
              Enter your personal details to use your full potential with your
              personalized coach guidance for your game
            </p>
            <button onClick={onClickLogin} className="hidden" id="login">
              Login
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>
              Register with your personal details, will take you one step closer
              to your personalized coach
            </p>
            <button onClick={onClickRegister} className="hidden" id="register">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
