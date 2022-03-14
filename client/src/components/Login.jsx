import React, { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GlobalContext from "../store/GlobalContext";

const Login = () => {
  const { setCookie, user, setUser, setAuth } = useContext(GlobalContext);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    const loggedUser = {
      ...user,
      [name]: value,
    };

    setUser(loggedUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      user_email: user.email,
      user_password: user.password,
    };

    axios.post("http://localhost:4000/login", data).then((response) => {
      if (response.data.error) alert(response.data.error);
      setAuth(true);
      setCookie("jwt", response.data);
    });
  };

  return (
    <div className="flex flex-1 justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-60 space-y-4 pt-32"
      >
        <div className="text-xl font-semibold text-center">Bienvenido</div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
          />
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="h-10 w-40 font-semibold text-md rounded-md bg-cyan-500 text-white"
          >
            Login
          </button>
          <Link to="/register" className="text-sm font-semibold">
            ¿Quieres registrarte?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
