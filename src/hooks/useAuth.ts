import { useEffect } from "react";
import { useUser, User } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const { user, setUser,addUser,loadUser, removeUser } = useUser();

  useEffect(() => {
    loadUser();
  }, []);  

  const login = (user: User) => {
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };

  return { user, setUser , login, logout };
};