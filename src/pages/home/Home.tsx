import { useNavigate } from "react-router-dom"
import Button from "../../components/button/Button"

const Home = () => {

    const navigate = useNavigate();

  return (
    <div className="md:hidden xs:bg-main-bg xs:bg-no-repeat xs:bg-center xs:bg-cover flex flex-col justify-end min-h-screen">
        <div className="w-full mt-auto mx-auto mb-12 flex justify-center items-center flex-col font-inter">
            <h1 className="text-main my-auto font-semibold text-3xl tracking-wide">
                NO MORE EXCUSE
            </h1>
            <h2 className="ml-9 w-2/4 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-black text-center my-5 mr-auto font-semibold text-2xl tracking-wide">
                DO IT NOW
            </h2>
            <p className="w-5/6 text-main text-justify">
                Achieve your fitness goals and track your progress effortlessly. Stay consistent, push your limits, and see real results with every workout.
            </p>
            <div className="w-4/5 mt-2 flex justify-between items-center">
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
