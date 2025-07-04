import React, { useState, useEffect } from "react";
import { UserContext } from "./user-context";
import type {
  User,
  UserContextType,
  UsersProviderProps,
} from "../interfaces/users";

const defaultUser: User = {
  id: "",
  role: "",
  name: "",
  email: "",
  photo_url: "",
  information: false,
};

export const UserProvider: React.FC<UsersProviderProps> = ({ children }) => {
  const initialStorage = (): User => {
    const page = localStorage.getItem("users");
    return page ? JSON.parse(page) : defaultUser;
  };

  const [currentUser, setCurrentUser] = useState<User>(defaultUser);

  const setLocalStrorage = (value: User) => {
    const newUser: User = {
      ...defaultUser,
      ...value,
    };
    setCurrentUser(newUser);
    localStorage.setItem("users", JSON.stringify(newUser));
  };

  const logout = () => {
    localStorage.setItem("users", JSON.stringify(defaultUser));
    setCurrentUser(defaultUser);
  };

  useEffect(() => {
    if (currentUser.id === "") {
      setCurrentUser(initialStorage());
    }
  }, []);

  const value: UserContextType = {
    currentUser,
    setCurrentUser,
    setLocalStrorage,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
