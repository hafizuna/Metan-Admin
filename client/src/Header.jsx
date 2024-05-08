import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

function Header({ OpenSidebar }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .get("http://localhost:3001/logout")
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
      <div className="header-right" onClick={handleLogout}>
        <BsPersonCircle className="icon" />
        Logout
      </div>
    </header>
  );
}

export default Header;
