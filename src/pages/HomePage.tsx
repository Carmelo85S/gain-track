import TrainingMenu from "../components/buttonList/TrainingMenu";
import ChooseTraining from "../components/chooseTraining/ChooseTraining";
import Dashboard from "../components/dashboard/Dashboard";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-gradient flex justify-center items-center flex-col px-4">
      <Dashboard />
      <ChooseTraining />
      <TrainingMenu  />
    </div>
  );
}

export default HomePage;
