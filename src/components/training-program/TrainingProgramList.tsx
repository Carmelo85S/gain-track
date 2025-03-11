import Advance from '../../assets/advance.webp';
import Intermediate from '../../assets/intermediate.webp';
import Beginner from '../../assets/beginner.webp';
import { trainingLevel } from '../../types/interface/trainingLevel';
import TrainingLevelCard from '../home-cards/Cards';
import Title from '../title/Title';

const trainingLevels: trainingLevel[] = [
  {
    img: Beginner,
    title: "Beginner",
  },
  {
    img: Intermediate,
    title: "Intermediate",
  },
  {
    img: Advance,
    title: "Advanced",
  },
];

const TrainingLevelsList: React.FC = () => {
  return (
    <>
    <Title title="Our Training Program" />
    
    <div className="md:hidden w-full grid grid-cols-3 gap-8 p-4">
      {trainingLevels.map((level, index) => (
        <TrainingLevelCard key={index} img={level.img} title={level.title} />
      ))}
    </div>
    </>
  );
};

export default TrainingLevelsList;
