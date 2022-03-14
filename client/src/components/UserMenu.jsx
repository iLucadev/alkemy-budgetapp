import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronDownIcon,
  UserCircleIcon,
  LogoutIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { ClipboardListIcon } from "@heroicons/react/outline";
import GlobalContext from "../store/GlobalContext";

const UserMenu = ({ username }) => {
  const { removeCookie, setAuth } = useContext(GlobalContext);
  const navigate = useNavigate();

  const logout = () => {
    removeCookie("jwt");
    setAuth(false);
    window.location.reload();
    navigate("/login");
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center space-x-2">
        <UserCircleIcon className="w-10 text-slate-600" />
        <p className="">{username}</p>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  {active ? (
                    <UserIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                  ) : (
                    <UserIcon
                      className="w-5 h-5 mr-2 text-violet-400"
                      aria-hidden="true"
                    />
                  )}
                  Profile
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  {active ? (
                    <ClipboardListIcon
                      className="w-5 h-5 mr-2"
                      aria-hidden="true"
                    />
                  ) : (
                    <ClipboardListIcon
                      className="w-5 h-5 mr-2 text-purple-400"
                      aria-hidden="true"
                    />
                  )}
                  All opearations
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => logout()}
                  className={`${
                    active ? "bg-red-500 text-white" : "text-gray-900"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  {active ? (
                    <LogoutIcon
                      className="w-5 h-5 mr-2 text-white"
                      aria-hidden="true"
                    />
                  ) : (
                    <LogoutIcon
                      className="w-5 h-5 mr-2 text-red-400"
                      aria-hidden="true"
                    />
                  )}
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserMenu;
