import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const Login = () => {
  const [loginField, setLoginField] = useState({ userName: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    await axios
      .post("http://localhost:4000/auth/login", loginField, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("Login success:", response?.data);

        localStorage.setItem("gymPic", response?.data?.gym?.profilePic);
        localStorage.setItem("isLogin", true);
        localStorage.setItem("token", response?.data?.token);

        navigate("/dashboard");
      })
      .catch((err) => {
        const errorMessage =
          err?.response?.data?.error || "Something went wrong!";
        toast.error(errorMessage);
      });
  };

  const handleOnChange = (event, name) => {
    setLoginField({ ...loginField, [name]: event.target.value });
  };

  return (
    <div className="w-1/3 p-10 mt-20 ml-20 rounded-xl bg-white bg-opacity-20 backdrop-blur-md shadow-lg border border-white border-opacity-30 h-fit">
      <div className="font-sans text-white text-center text-3xl">Login</div>
      <input
        value={loginField.userName}
        onChange={(event) => {
          handleOnChange(event, "userName");
        }}
        type="text"
        className="w-full my-5 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-600"
        placeholder="Enter Username"
      />
      <input
        value={loginField.password}
        onChange={(event) => {
          handleOnChange(event, "password");
        }}
        type="password"
        className="w-full my-5 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-600"
        placeholder="Enter Password"
      />

      <div
        className="p-3 w-[80%] bg-black mx-auto rounded-lg text-white text-center text-lg hover:bg-white hover:text-black font-semibold cursor-pointer transition-all duration-300"
        onClick={() => {
          handleLogin();
        }}
      >
        Login
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
