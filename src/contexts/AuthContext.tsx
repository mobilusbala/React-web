import { ReactNode, createContext, useEffect, useState } from "react";
import { User } from "../hooks/useUser";
import { useLocalStorage } from "../hooks/useLocalStorage";

type Props = {
  children?: ReactNode;
}

type AuthContext = {
  user: User | null;
  setUser: (user: User | null) => void;
}

function getInitialState() {
  const userObjectString = localStorage.getItem('user')
  const user: User | null = userObjectString ? JSON.parse(userObjectString) : null;
  return user
}

const initialValue = {
  user: null,
  setUser: () => { }
}

export const AuthContext = createContext<AuthContext>(initialValue);

export const AuthProvider = ({ children }: Props) => {

  const [authUser, setAuthUser] = useState<User | null>({} as User);

  const setUser = (user: User | null) => {
    setAuthUser(user);
  }

  return (
    <AuthContext.Provider value={{ user: authUser, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
