import React from "react";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "./API";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Users from "./assets/components/Users";
import UpdateUser from "./assets/components/UpdateUser";
import CreateUser from "./assets/components/CreateUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Accounts() {
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
      <div>
        {/* <Route path="/home/accounts/" element={<Users />}></Route>
        <Route path="/home/accounts/create" element={<CreateUser />}></Route>
        <Route path="/home/accounts/update" element={<UpdateUser />}></Route> */}
        Accounts
      </div>
    </div>
  );
}
export default Accounts;
