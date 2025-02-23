import { TrainingGraphics } from "../../types/TrainingGraphics"

const ChooseTraining: React.FC<TrainingGraphics> = ({img, alt}) => {
  return (
    <div>
      <img 
        className="rounded-md"
        src={img} 
        alt={alt}
    />
    </div>
  )
}

export default ChooseTraining
