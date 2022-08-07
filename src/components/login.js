import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setmessage] = useState("");
  const [messagecolor, setmessagecolor] = useState();

  const navigation = useNavigate();

  const senddata = () => {
    if (email.length > 0 && password.length > 0) {
      navigation("/home");
    } else {
      setmessage("Invalid details");
      setmessagecolor("fail");
    }
  };
  return (
    <div className="details-container">
      <div className="login-form">
        <label htmlFor="username">
          <i className="fa fa-user"></i>
        </label>
        <input
          type="text"
          id="username"
          placeholder="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">
          <i className="fa fa-lock"></i>
        </label>
        <input
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Login" onClick={senddata} />

        <div className={`message ${messagecolor}`}>{msg}</div>
      </div>
    </div>
  );
}

export default Login;
