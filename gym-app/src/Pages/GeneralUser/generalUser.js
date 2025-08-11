import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import MemberCard from "../../Components/MemberCard/memberCard";
import {
  getMonthlyJoined,
  twoDayExpire,
  aWeekToExpire,
  expired,
  inActiveMembers,
} from "./data";

const GeneralUser = () => {
  const [header, setHeader] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const func = sessionStorage.getItem("func");
    functionCall(func);
  }, []);

  const functionCall = async (func) => {
    switch (func) {
      case "monthlyJoined":
        setHeader("Monthly Joined Members");
        var datas = await getMonthlyJoined();
        setData(datas.members);
        break;

      case "twoDayExpire":
        setHeader("Expring In 2 Days Members");
        var datas = await twoDayExpire();
        setData(datas.members);
        break;

      case "aWeekToExpire":
        setHeader("Expring In A Week");
        var datas = await aWeekToExpire();
        setData(datas.members);
        break;

      case "expired":
        setHeader("Expired Members");
        var datas = await expired();
        setData(datas.members);
        break;

      case "inActiveMembers":
        setHeader("InActive Members");
        var datas = await inActiveMembers();
        setData(datas.members);
        break;
    }
  };
  return (
    <div className="text-black p-5 w-3/4 flex-col">
      <div className="border-2 bg-slate-900 flex justify-between w-full text-white rounded-lg p-3">
        <Link
          to={"/dashboard"}
          className="border-2 pl-3 pr-3 pt-1 pb-1 rounded-2xl cursor-pointer hover:bg-gradient-to-r from-[#dc2626] via-[#f97316]  to-[#1f2937]"
        >
          <ArrowBackIcon /> Back To Dashboard
        </Link>
      </div>

      <div className="mt-5 text-xl text-black">{header}</div>

      <div className="bg-slate-100 p-5 mt-5 rounded-lg grid gap-2 md:grid-cols-3 overflow-x-auto h-[80%]">
        {data.map((item, index) => {
          return <MemberCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default GeneralUser;
