import React, { useState } from "react";
import "./login.css";

function Register(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setmessage] = useState("");
  const [messagecolor, setmessagecolor] = useState();

  const senddata = () => {
    setmessage("Not working");
    setmessagecolor("fail");
  };

  return (
    <div className="details-container">
      <div className="login-form">
        <label htmlFor="username">
          <i class="fa fa-user"></i>
        </label>
        <input
          type="text"
          id="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="username">
          <i class="fa fa-envelope"></i>
        </label>
        <input
          type="email"
          id="username"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">
          <i class="fa fa-lock"></i>
        </label>
        <input
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Register" onClick={senddata} />

        <div className={`message ${messagecolor}`}>{msg}</div>
      </div>
    </div>
  );
}

export default Register;
