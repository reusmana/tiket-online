import React from "react";
import { cn } from "../../../lib/utils";

const Button: React.FC<{
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => string | void;
  children?: React.ReactNode;
  disabled?: boolean;
}> = ({
  className,
  type = "button",
  disabled,
  onClick,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn("w-full text-white rounded-lg bg-primary", className)}
    >
      {children}
    </button>
  );
};

export default Button;
