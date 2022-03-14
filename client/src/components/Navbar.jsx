import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import GlobalContext from "../store/GlobalContext";
import logo from "../assets/images/logo.png";
import OperationModal from "./OperationModal";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const { auth, user } = useContext(GlobalContext);

  let activeClassName = "text-lime-600 overline decoration-lime-600";

  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <header className="h-28 sm:px-4 bg-white">
      {auth ? (
        <nav className="h-full flex items-center font-sans font-semibold antialiased justify-between">
          <div className="flex items-center">
            <NavLink to="/home" className="w-48">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>

          <div className="flex space-x-8">
            <button
              type="button"
              onClick={openModal}
              className="h-10 px-4 font-semibold text-md rounded-md bg-green-500 text-white"
            >
              Nuevo Registro
              <OperationModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                openModal={openModal}
              />
            </button>
            <UserMenu username={user.username} />
          </div>
        </nav>
      ) : (
        <nav className="h-full flex justify-center items-center">
          <NavLink to="/home" className="w-48">
            <img src={logo} alt="logo" />
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
