import {TrainingLevelCardProps} from '../../types/interface/trainingCard.ts'


const TrainingLevelCard: React.FC<TrainingLevelCardProps> = ({ img, title }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="w-24 h-24 bg-white rounded-lg border-4 border-white overflow-hidden mb-4">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt={`Graphic image for ${title}`}
        />
      </div>
      <p className="text-lg font-semibold text-gray-700">{title}</p>
    </div>
  );
};

export default TrainingLevelCard;
