"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState("");
  const API_ENDPOINT = process?.env?.NEXT_PUBLIC_API_ENDPOINT ?? "";
  console.log("Api endpoint is : ", API_ENDPOINT);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await axios.get(`${API_ENDPOINT}/home`);
      setData(response?.data?.message);
    } catch (error) {
      console.log("fething data error", error);
    }
  };

  return (
    <div>
      <h1>User Data is : {data}</h1>
    </div>
  );
};

export default Home;
