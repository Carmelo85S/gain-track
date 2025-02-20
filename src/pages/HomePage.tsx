import TrainingMenu from "../components/buttonList/TrainingMenu";
import Dashboard from "../components/dashboard/Dashboard";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col bg-primary-100 px-4">
      <Dashboard />
      <TrainingMenu  />
    </div>
  );
}

export default HomePage;
