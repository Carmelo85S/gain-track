import { useNavigate } from "react-router-dom";
import { MenuButtonProps } from "../../types/MenuButtonProps";

const TrainingListButton: React.FC<MenuButtonProps> = ({ label, link }) => {
  const navigate = useNavigate();

  return (
    <button
      className="w-40 h-40 my-2 bg-training-100 text-training-text 
        font-semibold text-lg flex justify-center items-center 
        rounded-xs"
      onClick={() => navigate(link)}
    >
      <span>{label}</span>
    </button>

  );
};

export default TrainingListButton;
