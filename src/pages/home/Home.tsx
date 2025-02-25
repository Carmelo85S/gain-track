import Button from "../../components/button/Button"

const Home = () => {
  return (
    <div className="md:hidden xs:bg-main-bg xs:bg-no-repeat xs:bg-center xs:bg-cover flex flex-col justify-end h-screen">
        <div className="w-full mt-auto mx-auto mb-12 flex justify-center items-center flex-col font-inter">
            <h1 className="text-main my-auto font-semibold text-5xl tracking-wide">
                NO MORE EXCUSE
            </h1>
            <h2 className="ml-9 w-2/4 h-10  bg-primary-100 rounded-lg text-main text-center my-5 mr-auto font-semibold text-3xl tracking-wide">
                DO IT NOW
            </h2>
            <p className="w-5/6 text-main bg-black bg-opacity-40 rounded-md">
                Achieve your fitness goals and track your progress effortlessly. Stay consistent, push your limits, and see real results with every workout.
            </p>
            <div className="w-2/5 mt-2 flex justify-between items-center">
                <Button label="Sign In" variant="primary" size="medium" onClick={() => alert("Clicked!")} />
                <Button label="Sign Up" variant="primary" size="medium" onClick={() => alert("Clicked!")} />
            </div>
        </div>
    </div>
  )
}

export default Home
