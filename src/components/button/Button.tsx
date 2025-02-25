import React from "react";
import { ButtonProps } from "../../types/buttonProps";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
}) => {
  const baseStyles = "font-semibold rounded-lg transition duration-300";
  
  const variantStyles = {
    primary: "bg-primary-100 text-white hover:bg-primary-200",
    secondary: "bg-secondary-300 text-white hover:bg-secondary-400",
    outline: "border border-primary-100 text-primary-100 hover:bg-primary-100 hover:text-white",
  };

  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
