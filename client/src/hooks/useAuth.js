import { useContext } from "react";
import GlobalContext from "../store/GlobalContext";

const useAuth = () => {
  return useContext(GlobalContext);
};

export default useAuth;
