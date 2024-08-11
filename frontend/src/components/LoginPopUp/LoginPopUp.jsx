import { useState } from "react";
import { assets } from "../../assets/assets";
import "./LoginPopUp.css";
import { useContext } from "react";
import axios from "axios";
import { StoreContext } from "../../Context/StoreContext";

const LoginPopUp = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const onChangeHandler = (event) => {
    setData({...data, [event.target.name]: event.target.value });
  }

  const onLogin = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (currState === 'Login') {
      newUrl += '/api/user/login';
    } else {
      newUrl += '/api/user/register';
    }
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token)
      localStorage.setItem('token', response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  }

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="image"
          />
        </div>
        <div className="login-popup-input">
          {currState === "Sign Up" && (
            <input type="text" name="name" placeholder="Your Name" value={data.name} onChange={onChangeHandler} required />
          )}
          <input type="email" name="email" placeholder="Your Email" onChange={onChangeHandler} value={data.email} required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={onChangeHandler}
            required
          />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
