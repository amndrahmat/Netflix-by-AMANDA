import React, { useState } from "react";
import logo from "../../images/logo.png";
import header from "../../images/netflix-header.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    const userValidate = /^[A-Za-z]{4,10}$/i.test(username);
    const passwordValidation =
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(
        password
      );

    if (username === "" || password === "") {
      setError({
        ...error,
        username: "Username is required!",
        password: "Password is required!",
      });
    } else if (!userValidate || !passwordValidation) {
      setError({
        ...error,
        username: "Username is should be 4-10 charcters",
        password:
          "Password should be 4-10 charcters and include at least 1 letter, 1 special character and 1 number",
      });
    }
    return error;
  };

  return (
    <div className="relative text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 border-b-8 border-neutral-800">
      <div className="flex w-full justify-between items-center absolute px-16">
        <div className="cursor-pointer z-20 " onClick={() => navigate("/")}>
          <img className="h-28" src={logo} alt="logo"></img>
        </div>
      </div>
      <div className="absolute flex flex-col justify-center items-center inset-0 text-black text-center z-10">
        <div className="flex flex-col bg-black-rgba py-20 px-12 rounded-lg">
          <h2 className="text-left mb-8 font-sans text-3xl text-white font-bold tracking-normal no-underline pb-4">
            Sign In
          </h2>
          <input
            name="username"
            className="mb-4 bg-stone-600 w-80 py-3.5 rounded-lg text-white pl-4"
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <span className="text-amber-600 w-80">{error.username}</span>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-4 bg-stone-600 w-80 py-3.5 rounded-lg text-white pl-4"
          ></input>
          <span className="text-amber-600 w-80">{error.password}</span>
          <div>
            <button
              onClick={handleLogin}
              className="bg-red-600 mt-4 text-white w-80 font-sans font-bold rounded-lg py-4"
            >
              Sign in
            </button>
          </div>
          <div className="pt-20">
            <p className="text-stone-500 font-sans text-sm font-normal tracking-normal no-underline pb-4 text-left">
              New to Netflix?
              <span className="text-white ml-2 cursor-pointer font-sans text-sm font-normal tracking-normal no-underline pb-4 text-left">
                Sign Up Now.
              </span>
            </p>
          </div>
        </div>
      </div>
      <img
        className="bg-cover bg-no-repeat bg-center mix-blend-overlay h-[850px] z-30"
        src={header}
        alt="header"
      ></img>
    </div>
  );
};

export default Login;
