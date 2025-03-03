import { ExperienceProps } from "../../types/experienceProps";
import BeginnerMan from "../../assets/beginner-man.webp"; // Assicurati di avere l'immagine corretta
import IntermediateMan from "../../assets/intermediate-man.webp";
import AndvanceMan from "../../assets/advance-man.webp";

const Experience: React.FC<ExperienceProps> = ({
  label,
  onClick = () => {},
  variant = "primary",
  size = "medium",
  img = BeginnerMan || IntermediateMan || AndvanceMan
}) => {
const baseStyles = "w-5/6 min-h-[150px] py-16 rounded font-semibold transition flex items-center justify-center relative";
  
  const variantStyles = {
    primary: "bg-primary-100 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    outline: "border border-2 border-primary-100",
  };

  const sizeStyles = {
    small: "text-sm px-2 py-1",
    medium: "text-base px-4 py-2",
    large: "text-lg px-6 py-3",
  };

  return (
    <button 
  onClick={onClick}
  className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
  style={{ 
    backgroundImage: `url(${img})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    position: 'relative'
  }}
>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="text-yellow-300 tracking-widest uppercase text-pretty text-2xl z-10">{label}</div>
</button>

  );
};

export default Experience;
