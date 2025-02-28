import { useNavigate } from "react-router-dom"
import Button from "../../components/button/Button"
import Heading from "../../components/heading/Heading";

const Home = () => {

    const navigate = useNavigate();

  return (
    <div className="no-overflow md:hidden xs:bg-main-bg xs:bg-no-repeat xs:bg-center xs:bg-cover xs:w-full xs:h-screen xs:flex xs:flex-col xs:justify-center xs:items-center xs:overflow-hidden">
        <div className="w-full bg-black bg-opacity-65 shadow-md rounded-lg flex flex-col items-center text-center">
            <Heading labelH1="NO EXCUSE" labelH2="DO IT NOW" />
            <p className="w-5/6 text-main text-justify">
                Achieve your fitness goals and track your progress effortlessly. 
                Stay consistent, push your limits, and see real results with every workout.
            </p>
            <div className="w-3/5 my-2 flex justify-between items-center">
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
