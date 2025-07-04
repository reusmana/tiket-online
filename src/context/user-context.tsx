import { createContext } from "react";
import type { UserContextType } from "../interfaces/users";

export const UserContext = createContext<UserContextType | null>(null);
