import { useContext, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { AuthContext } from "../contexts/AuthContext";

// NOTE: optimally move this into a separate file
export interface User {
  id: string;
  name: string;
  email: string;
  authToken?: string;
}

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
  const { setItem , getItem} = useLocalStorage();


  const addUser = (user1: User) => {
    console.log("getuser 1 --->",user);
    setUser(user1);
    setItem("user", JSON.stringify(user1));
    console.log("getuser 2 --->",user);
  };

  const loadUser = () => {
    const user = getItem("user");
    if (user) {
      addUser(JSON.parse(user));
    } else {
      setUser(null);
    }
  }

  const removeUser = () => {
    setUser(null);
    setItem("user", "");
  };

  return { user, setUser, loadUser, addUser, removeUser };
};