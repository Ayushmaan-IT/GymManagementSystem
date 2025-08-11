import axios from "axios";

const getMonthlyJoined = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4000/members/monthly-member",
      { withCredentials: true }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const twoDayExpire = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4000/members/within-2-days-expiring",
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
const aWeekToExpire = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4000/members/within-a-week",
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const expired = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4000/members/expired-member",
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching data:", error);
    throw error;
  }
};
const inActiveMembers = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4000/members/inactive-member",
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching data:", error);
    throw error;
  }
};

export {
  getMonthlyJoined,
  twoDayExpire,
  aWeekToExpire,
  expired,
  inActiveMembers,
};
