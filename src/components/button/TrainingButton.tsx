import { useNavigate } from "react-router-dom"
import { MenuButtonProps } from "../../types/MenuButtonProps";

const TrainingButton: React.FC<MenuButtonProps> = ({label, link}) => {
    
    const navigate = useNavigate();

    return (
        <button
            className="w-full sm:w-2/5 my-2 bg-secondary-300 text-white 
                    font-semibold py-3 rounded-lg transition-all duration-300 
                    text-base sm:text-sm xs:text-xs hover:bg-secondary-400 
                    active:scale-95 shadow-md"
            onClick={() => navigate(link)}
        >
            {label}
        </button>
    )
}

export default TrainingButton
