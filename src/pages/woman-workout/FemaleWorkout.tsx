import Heading from "../../components/heading/Heading"
import WomanWorkoutGraphic from "../../assets/woman-workout-main.webp";

const FemaleWorkout = () => {
  return (
    <div className="xs:bg-black">
      <div className="md:hidden flex flex-col justify-center min-h-screen">
        <img src={WomanWorkoutGraphic} alt="man workout graphic" />
        <div  className="relative bottom-44">
          <Heading labelH1="ELEVATE YOUR GAME" labelH2="TRACK YOU GAINS" />
        </div>
      </div>
    </div>
  )
}

export default FemaleWorkout
