import { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
  });
  const [userOperations, setUserOperations] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.jwt) {
      verifyToken();
    }
    navigate("/login");
  }, []);

  useEffect(() => {
    getUserData(user.id);
    getUserOperations(user.id);
  }, [auth]);

  useEffect(() => {
    navigate("/home");
  }, [userOperations]);

  const verifyToken = () => {
    const config = {
      headers: {
        jwt: cookies.jwt,
      },
    };
    axios.get("http://localhost:4000/isAuth", config).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        setAuth(response.data.auth);
        setUser((prev) => ({ ...prev, id: response.data.decoded.id }));
        getUserData(response.data.decoded.id);
        getUserOperations(user.id);
      }
    });
  };

  const getUserData = (id) => {
    axios.get(`http://localhost:4000/users/${id}`).then((response) => {
      response.data.error
        ? alert(response.data.error)
        : setUser((prev) => ({
            ...prev,
            username: response.data[0].user_name,
            email: response.data[0].user_email,
            password: response.data[0].user_password,
          }));
    });
  };

  const getUserOperations = (id) => {
    axios.get(`http://localhost:4000/operations/${id}`).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        let data = response.data;
        let formattedData = data.map((data) => {
          return {
            ...data,
            creation_date: new Date(data.creation_date),
            updated_at: new Date(data.updated_at),
          };
        });
        let sortedDates = formattedData
          .slice()
          .sort((a, b) => b.creation_date - a.creation_date);
        setUserOperations(sortedDates);
      }
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        auth,
        setAuth,
        user,
        setUser,
        cookies,
        setCookie,
        removeCookie,
        userOperations,
        setUserOperations,
        getUserOperations,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
