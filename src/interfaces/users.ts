import type { ReactNode } from "react";
interface User {
  id: string;
  role: string;
  name: string;
  email: string;
  photo_url: string;
  information: boolean;
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

export type { User, UserContextType, UsersProviderProps };
