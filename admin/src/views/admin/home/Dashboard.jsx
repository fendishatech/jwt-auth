import { useEffect, useInsertionEffect, useState } from "react";
import axiosClient from "../../../api/axiosClient";
import jwtDecode from "jwt-decode";

const Dashboard = () => {
  const [users, setUsers] = useState("");
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [expires, setExpires] = useState("");

  useEffect(() => {
    refreshToken();
    getUsers();
  }, []);

  const refreshToken = async () => {
    try {
      const res = await axiosClient.get("/users/token");
      setToken(res.data.accessToken);
      console.log(`Access Token : ${res.data.accessToken}`);
      console.log(`Refresh Token : ${res.data.refreshToken}`);
      const decode = jwtDecode(res.data.accessToken);
      setUsername(decode.username);
      setExpires(decode.exp);
    } catch (error) {
      console.log(error);
    }
  };

  const getUsers = async () => {
    try {
      const res = await axiosClient.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
    } catch (error) {}
  };

  // const axiosJWT = axiosClient.create();
  // axiosClient.interceptors.request.use(
  //   async (config) => {
  //     const currentDate = new Date();
  //     if (expire * 1000 < currentDate.getTime()) {
  //       const res = await axiosClient.get("/users/token");
  //       config.headers.Authorization = `Bearer ${res.data.accessToken}`;
  //       setToken(res.data.accessToken);
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject();
  //   }
  // );

  console.log(`Token Dashboard : ${token}`);
  return (
    <div>
      <p>hello {username}</p>
    </div>
  );
};

export default Dashboard;
