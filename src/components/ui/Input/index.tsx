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
    | "number"
    | "datetime-local";
  name: string;
  placeholder?: string;
  id: string;
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({
  className,
  type = "text",
  placeholder,
  name,
  id,
  value,
  onChange,
  ...props
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...props}
      className={cn(
        "w-full border rounded-lg focus:outline-none focus:border-slate-400",
        className
      )}
    />
  );
};

export default Input;
