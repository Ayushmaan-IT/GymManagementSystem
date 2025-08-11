import React from "react";
import Login from "../../Components/Login/login";
import SignUp from "../../Components/SignUp/signUp";

const Home = ({ setIsLogin }) => {
  return (
    <div className="w-full h-[100vh]">
      <nav className="bg-black text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">Fighters Fitness Gym(FFG)</h1>
      </nav>

      <div className='w-full bg-cover flex justify-center h-[100%] bg-[url("https://img.freepik.com/premium-photo/gym-interior-with-modern-neon-red-concept_832479-8415.jpg")]'>
        <div className="w-full lg:flex gap-36">
          <Login setIsLogin={setIsLogin} />
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Home;
