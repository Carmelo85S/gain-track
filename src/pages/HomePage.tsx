import TrainingMenu from "../components/buttonList/TrainingMenu";
import ChooseTraining from "../components/chooseTraining/ChooseTraining";
import Dashboard from "../components/dashboard/Dashboard";
import ChooseTrainingGraphic from "../assets/choose-training.webp"
import { useState } from "react";
const HomePage = () => {

  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full min-h-screen bg-gradient flex justify-center items-center flex-col px-4">
      <Dashboard visible={visible} setVisible={setVisible} />
      <ChooseTraining img={ChooseTrainingGraphic} alt="Choose training graphic" />
      <TrainingMenu  />
    </div>
  );
}

export default HomePage;
