import type { ReactNode } from "react";
interface User {
  id: string;
  role: string;
  name: string;
  email: string;
  photo_url: string;
  information: boolean;
}

interface UserDump {
  // this is for res login, register, get user profile, update profile user
  id: number;
  email: string;
  name: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface EventList {
  //daftar uncoming event
  id: number;
  name: string;
  city: string;
  startDate: string;
  endDate: string;
  thumbnail: string;
}

interface UserUpdate {
  // req update user
  name: string;
  password: string;
}

interface UserContextType {
  currentUser: User;
  setCurrentUser: React.Dispatch<React.SetStateAction<User>>;
  setLocalStrorage: (value: User) => void;
  logout: () => void;
}

interface UsersProviderProps {
  children: ReactNode;
}

export type {
  User,
  UserContextType,
  UsersProviderProps,
  UserDump,
  UserUpdate,
  EventList,
};
