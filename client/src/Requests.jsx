import React from "react";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "./API";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Requests() {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3001/home")
      .then((result) => {
        console.log(result);
        if (result.data !== "Success") {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <div>accepted requested appear here</div>
    </div>
  );
}
export default Requests;
