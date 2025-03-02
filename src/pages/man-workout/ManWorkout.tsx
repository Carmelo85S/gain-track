import Heading from "../../components/heading/Heading";
import ManWorkoutGraphic from "../../assets/man-workout-main.webp";
import Experience from "../../components/experience/Experience";
import { useNavigate } from "react-router-dom";
import BeginnerMan from "../../assets/beginner-man.webp";
import IntermediateMan from "../../assets/intermediate-man.webp";
import AdvanceMan from "../../assets/advance-man.webp";

const ManWorkout = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-[40vh] flex justify-center items-center z-10">
        <img
          src={ManWorkoutGraphic}
          alt="man workout graphic"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-48 transform -translate-y-1/2 text-center">
          <Heading labelH1="ELEVATE YOUR GAME" labelH2="TRACK YOUR GAINS" />
        </div>
      </div>

      <div className="relative mt-[40vh] flex flex-col justify-center items-center z-0 gap-7 py-32 bg-slate-950">
      <Experience
        onClick={() => navigate("/")}
        label={"Beginner"}
        variant="outline"
        size="large"
        img={BeginnerMan}
      />
      <Experience
        onClick={() => navigate("/")}
        label={"Intermediate"}
        variant="outline"
        size="large"
        img={IntermediateMan}
      />
      <Experience
        onClick={() => navigate("/")}
        label={"Advanced"}
        variant="outline"
        size="large"
        img={AdvanceMan}
      />
    </div>

    </div>
  );
};

export default ManWorkout;
