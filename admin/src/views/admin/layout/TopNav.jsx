import { useEffect, useState } from "react";
import axiosClient from "../../../api/axiosClient";

const TopNav = () => {
  useEffect(() => {}, []);

  const handleLogout = async () => {
    try {
      const res = await axiosClient.delete("/users/logout");
      console.log(res);
      console.log("User Logged out");
    } catch (error) {}
  };
  return (
    <div>
      <div>
        <p>navbar </p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default TopNav;
