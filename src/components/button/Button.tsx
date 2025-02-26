import { ButtonProps } from "../../types/buttonProps";

const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${variant} ${size} bg-primary-100 text-main px-4 py-2 rounded-md font-semibold ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
