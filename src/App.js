import React, { useState, useEffect } from "react";
import Login from "./components/login";
import Home from "./components/home.js";
import Register from "./components/register";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const [title, setTitle] = useState("Login");
  const [loginClicked, setLoginClicked] = useState(true);
  const [loginActive, setLoginActive] = useState("buttonactive");

  const [registerClicked, setRegisterClicked] = useState(false);

  const [RegisterActive, setRegisterActive] = useState("buttoninactive");

  useEffect(() => {
    if (loginClicked) {
      setRegisterClicked(false);
      setTitle("Login");
      setLoginActive("buttonactive");
      setRegisterActive("buttoninactive");
    }

    if (registerClicked) {
      setLoginClicked(false);
      setTitle("Register");
      setRegisterActive("buttonactive");
      setLoginActive("buttoninactive");
    }
  });

  const initial = (
    <div className="initial">
      <div className="title"> {title} </div>
      <div className="btn">
        <button
          className={`Login ${loginActive}`}
          onClick={() => {
            setLoginClicked(true);
          }}
        >
          {" "}
          Login{" "}
        </button>
        <button
          className={`Register ${RegisterActive}`}
          onClick={() => {
            setRegisterClicked(true);
          }}
        >
          {" "}
          Register{" "}
        </button>
      </div>
    </div>
  );

  const before = (
    <div>
      {initial}
      {loginClicked ? <Login /> : <Register />}
    </div>
  );

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={before}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
