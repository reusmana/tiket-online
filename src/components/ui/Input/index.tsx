import React from "react";
import { cn } from "../../../lib/utils";

const Input: React.FC<{
  className?: string;
  type?:
    | "text"
    | "password"
    | "email"
    | "checkbox"
    | "file"
    | "date"
    | "time"
    | "number";
  name: string;
  placeholder?: string;
  id: string;
}> = ({ className, type = "text", placeholder, name, id, ...props }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      {...props}
      className={cn(
        "w-full border rounded-lg focus:outline-none focus:border-slate-400",
        className
      )}
    />
  );
};

export default Input;
