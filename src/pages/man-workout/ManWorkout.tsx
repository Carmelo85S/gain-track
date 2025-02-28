import Heading from "../../components/heading/Heading"
import ManWorkoutGraphic from "../../assets/man-workout-main.webp";

const ManWorkout = () => {
  return (
    <div className="xs:bg-black">
      <div className="md:hidden flex flex-col justify-center min-h-screen">
        <img src={ManWorkoutGraphic} alt="man workout graphic" />
        <div  className="relative bottom-44">
          <Heading labelH1="ELEVATE YOUR GAME" labelH2="TRACK YOU GAINS" />
        </div>
      </div>
    </div>
  )
}

export default ManWorkout
