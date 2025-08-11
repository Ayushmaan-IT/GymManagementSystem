import React, { useState } from "react";
import "./signUp.css";
import Modal from "../Modal/modal";
import ForgotPassword from "../ForgotPassword/forgotPassword";
import axios from "axios";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import { ToastContainer, toast } from "react-toastify";
const SignUp = () => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [inputField, setInputField] = useState({
    email: "",
    userName: "",
    password: "",
    profilePic: "https://wallpaperaccess.com/full/834288.jpg",
  });
  const [loaderImage, setLoaderImage] = useState(false);
  const handleClose = () => {
    setForgotPassword((prev) => !prev);
  };

  const handleOnchange = (event, name) => {
    setInputField({ ...inputField, [name]: event.target.value });
  };

  const uploadImage = async (event) => {
    setLoaderImage(true);
    console.log("Image Uploading");
    const files = event.target.files;
    const data = new FormData();
    data.append("file", files[0]);

    //df2tstlab

    data.append("upload_preset", "gym-app");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/df2tstlab/image/upload",
        data
      );
      console.log(response);
      const imageUrl = response.data.url;
      setLoaderImage(false);
      setInputField({ ...inputField, ["profilePic"]: imageUrl });
    } catch (err) {
      console.log(err);
      setLoaderImage(false);
    }
  };

  const handleRegister = async () => {
    await axios
      .post("http://localhost:4000/auth/register", inputField)
      .then((resp) => {
        const successMsg = resp.data.message;
        toast.success(successMsg);
      })
      .catch((err) => {
        const errorMessage = err.response.data.error;
        //console.log(errorMessage)
        toast.error(errorMessage);
      });
  };

  return (
    <div className="customSignup w-1/3 p-10 mt-20 ml-20 rounded-xl bg-white bg-opacity-20 backdrop-blur-md shadow-lg border border-white border-opacity-30 h-[450px] overflow-y-auto">
      <div className="font-sans text-white text-center text-3xl">Register</div>
      <input
        type="text"
        value={inputField.email}
        onChange={(event) => {
          handleOnchange(event, "email");
        }}
        className="w-full my-5 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-600"
        placeholder="Enter Email"
      />
      <input
        type="text"
        value={inputField.userName}
        onChange={(event) => {
          handleOnchange(event, "userName");
        }}
        className="w-full mb-5 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-600"
        placeholder="Enter UserName"
      />
      <input
        type="password"
        value={inputField.password}
        onChange={(event) => {
          handleOnchange(event, "password");
        }}
        className="w-full mb-5 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-600"
        placeholder="Enter Password"
      />
      <input
        type="file"
        onChange={(e) => {
          uploadImage(e);
        }}
        className="w-full mb-10 p-2 rounded-lg"
      />
      {loaderImage && (
        <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
          <LinearProgress color="secondary" />
        </Stack>
      )}
      <img
        src={inputField.profilePic}
        alt=""
        className="h-[200px] w-[300px] mt-1"
      />
      <div
        className="p-3 w-[80%] bg-black mx-auto rounded-lg text-white text-center text-lg hover:bg-white hover:text-black font-semibold cursor-pointer transition-all duration-300 mt-8"
        onClick={() => handleRegister()}
      >
        Register
      </div>
      <div
        className="p-3 w-[80%] mt-8 bg-black mx-auto rounded-lg text-white text-center text-lg hover:bg-white hover:text-black font-semibold cursor-pointer transition-all duration-300"
        onClick={handleClose}
      >
        Forgot Password
      </div>
      {forgotPassword && (
        <Modal
          header="ForgotPassword"
          handleClose={handleClose}
          content={<ForgotPassword />}
        />
      )}{" "}
      <ToastContainer />
    </div>
  );
};

export default SignUp;
