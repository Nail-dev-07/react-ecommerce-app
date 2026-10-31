import Button from "../components/Button";
import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { fetchApi } from "../apiClient/apiClient.js";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registrationData = {
      username: email,
      password
    };

    try {
      await fetchApi("/register", {
        method:"POST",
        body: JSON.stringify(registrationData)
      }) 
    } catch (err) {
      console.error(err)
    };
  };
  return (
    <div className="register-container">
      <h1>Create an Account</h1>
      <div className="register-box">
        <form onSubmit={handleSubmit}>
          <div className="reg-sec">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="reg-sec">
            <label>Create a password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="muted">8-25 characters</p>
          </div>
          <div className="reg-sec">
            <label>Date of birth</label>
            <input type="date" />
          </div>
          <div className="reg-sec2">
            <input type="checkbox" />
            <p className="muted">
              I would like to receive personalized promotions
            </p>
          </div>
          <div className="reg-sec2">
            <input type="checkbox" />
            <p className="muted">
              I agree to the Terms of Service and Privacy Policy
            </p>
          </div>
          <div className="buttons">
            <Button text="Create Account" type="submit" />
            <Link to="/login">
              <button className="global-button white" type="button">
                Back to Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
