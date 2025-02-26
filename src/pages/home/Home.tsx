import { useNavigate } from "react-router-dom"
import Button from "../../components/button/Button"

const Home = () => {

    const navigate = useNavigate();

  return (
    <div className="md:hidden xs:bg-main-bg xs:bg-no-repeat xs:bg-center xs:bg-cover sm:bg-main-bg sm:bg-no-repeat sm:bg-center sm:bg-cover flex flex-col justify-center w-full h-screen overflow-hidden">
        <div className="w-full bg-black bg-opacity-65 shadow-md rounded-lg mx-auto flex justify-center items-center flex-col font-inter">
            <h1 className="text-main my-auto font-semibold text-3xl tracking-wide">
                NO MORE EXCUSE
            </h1>
            <h2 className="ml-9 w-2/4 bg-primary-100 rounded-lg flex items-center justify-center text-black text-center my-5 mr-auto font-semibold text-2xl tracking-wide">
                DO IT NOW
            </h2>
            <p className="w-5/6 text-main text-justify">
                Achieve your fitness goals and track your progress effortlessly. Stay consistent, push your limits, and see real results with every workout.
            </p>
            <div className="w-4/5 my-2 flex justify-between items-center">
                <Button 
                    label="Sign In" 
                    onClick={() => navigate("/signin")}
                 />
                <Button 
                    label="Sign Up" 
                    variant="primary" 
                    size="medium" 
                    onClick={() => navigate("/signup")}
                 />
            </div>
        </div>
    </div>
  )
}

export default Home
