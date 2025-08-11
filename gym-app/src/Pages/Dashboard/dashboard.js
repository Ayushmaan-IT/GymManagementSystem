import React, { useState, useEffect, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PeopleIcon from "@mui/icons-material/People";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ErrorIcon from "@mui/icons-material/Error";
import ReportIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const [accordianDashboard, setAccordianDashboard] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const checkIfClickOutside = (e) => {
      if (
        accordianDashboard &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setAccordianDashboard(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickOutside);
    };
  }, [accordianDashboard]);

  const handleOnclickMenu = (value) => {
    sessionStorage.setItem("func", value);
  };

  return (
    <div className="w-3/4 text-black p-5 relative">
      <div className="w-full bg-gradient-to-r from-red-700 via-orange-600 to-black text-white rounded-lg flex p-3 justify-between items-center">
        <MenuIcon
          sx={{ cursor: "pointer" }}
          onClick={() => {
            setAccordianDashboard((prev) => !prev);
          }}
        />

        <img
          className="w-8 h-8 rounded-3xl border-2"
          src="https://tse2.mm.bing.net/th/id/OIP.ccCdCRaRMADh_PpX3UKoagHaEg?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Image"
        />
      </div>
      {accordianDashboard && (
        <div
          ref={ref}
          className=" absolute p-3 bg-slate-900 text-white rounded-xl text-lg font-extralight"
        >
          <div>Hi Welcome to our Fighters Fitness Gym.</div>
          <p>Feel free to ask any querries</p>
        </div>
      )}

      <div className="mt-5 pt-3 bg-slate-100 bg-opacity-50 grid gap-5 grid-cols-3 w-full pb-5 overflow-x-auto h-[80%]">
        {/* this is the card block */}
        <Link
          to={"/member"}
          className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer"
        >
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-red-600 via-orange-500 to-black">
            {" "}
          </div>

          <div className="py-7 px-5 flex-col justify-center w-full text-center rounded-b-lg hover:bg-black hover:text-white">
            <PeopleIcon sx={{ color: "orange", fontSize: "50px" }} />
            <p className="text-xl my-3 font-semibold font-mono">
              Joined Members
            </p>
          </div>
        </Link>

        {/* this is the card block */}
        <Link
          to={"/specific/monthly"}
          onClick={() => handleOnclickMenu("montlyJoined")}
          className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer"
        >
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-red-600 via-orange-500 to-black"></div>

          <div className="py-7 px-5 flex-col justify-center w-full text-center rounded-b-lg hover:bg-black hover:text-white">
            <SignalCellularAltIcon
              sx={{ color: "#f87171", fontSize: "50px" }}
            />
            <p className="text-xl my-3 font-semibold font-mono">
              Monthly Joined
            </p>
          </div>
        </Link>

        {/* this is the card block */}
        <Link
          to={"/specific/expire-with-in-2-days"}
          onClick={() => handleOnclickMenu("twoDayExpire")}
          className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer"
        >
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-red-600 via-orange-500 to-black"></div>

          <div className="py-7 px-5 flex-col justify-center w-full text-center rounded-b-lg hover:bg-black hover:text-white">
            <AccessAlarmIcon sx={{ color: "#ea580c", fontSize: "50px" }} />
            <p className="text-xl my-3 font-semibold font-mono">
              Expiring Soon!!
            </p>
          </div>
        </Link>

        {/* this is the card block */}
        <Link
          to={"/specific/expire-with-in-a-week"}
          onClick={() => handleOnclickMenu("aWeekToExpire")}
          className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer"
        >
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-red-600 via-orange-500 to-black"></div>

          <div className="py-7 px-5 flex-col justify-center w-full text-center rounded-b-lg hover:bg-black hover:text-white">
            <AccessAlarmIcon sx={{ color: "#9a3412", fontSize: "50px" }} />
            <p className="text-xl my-3 font-semibold font-mono">
              Expiring within a week
            </p>
          </div>
        </Link>

        {/* this is the card block */}
        <Link
          to={"/specific/expired"}
          onClick={() => handleOnclickMenu("expired")}
          className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer"
        >
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-red-600 via-orange-500 to-black"></div>

          <div className="py-7 px-5 flex-col justify-center w-full text-center rounded-b-lg hover:bg-black hover:text-white">
            <ErrorIcon sx={{ color: "red", fontSize: "50px" }} />
            <p className="text-xl my-3 font-semibold font-mono">Expired!!</p>
          </div>
        </Link>

        {/* this is the card block */}
        <Link
          to={"/specific/inactive-mambers"}
          onClick={() => handleOnclickMenu("inActiveMembers")}
          className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer"
        >
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-red-600 via-orange-500 to-black"></div>

          <div className="py-7 px-5 flex-col justify-center w-full text-center rounded-b-lg hover:bg-black hover:text-white">
            <ReportIcon sx={{ color: "#991b1b", fontSize: "50px" }} />
            <p className="text-xl my-3 font-semibold font-mono">
              InActive Members
            </p>
          </div>
        </Link>
      </div>

      <div className="md:bottom-4 p-4 w-3/4 mb-4 md:mb-0 absolute bg-black text-white mt-20 rounded-xl text-xl">
        Contact Developer for any Technical Error at +919830833570
      </div>
    </div>
  );
};

export default Dashboard;
