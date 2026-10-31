import Button from "../components/Button";
import "./Login.css";
import { Link } from "react-router-dom";
import {fetchApi} from "../apiClient/apiClient.js";
import {useState} from 'react';
function Login() {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      username: email,
      password
    }

    try {
      await fetchApi("/login", {
        method: "POST",
        body: JSON.stringify(loginData)
      })
    } catch (err) {
      console.error(err)
    };
  }
  return (
    <div className="login-container">
      <h1>Login</h1>
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <div className="login-sec">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="login-sec">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="login-sec2">
            <div className="remember-me">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <div className="forgot">
              <p className="muted">Forgot password?</p>
            </div>
          </div>
          <div className="buttons">
            <Button text="Login" type="submit" />
          </div>
          <div className="or">
            <p>
              Or <Link to="/register">Create an Account</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
