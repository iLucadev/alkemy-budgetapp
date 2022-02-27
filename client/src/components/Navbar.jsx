import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Login from "./Login";

const Navbar = () => {
  let activeClassName = "text-lime-600 overline decoration-lime-600";

  return (
    <header className="h-28 sm:px-4 bg-white">
      <nav className="h-full flex items-center font-mono text-lg font-semibold antialiased">
        <div className="flex items-center space-x-12 w-2/3">
          <NavLink to="/home" className="w-48">
            <img src={logo} alt="logo" />
          </NavLink>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? activeClassName : "")}
          >
            home
          </NavLink>
          <NavLink
            to="/operations"
            className={({ isActive }) => (isActive ? activeClassName : "")}
          >
            operations
          </NavLink>
        </div>
        <div className="flex justify-end w-1/3">
          <Login />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
