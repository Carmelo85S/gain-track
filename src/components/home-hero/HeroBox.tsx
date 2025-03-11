const HeroBox = () => {
  return (
    <div className="md:hidden w-full h-[250px] bg-primary-100 flex flex-col justify-center items-center text-training-text">
      
      <h1 className="text-3xl font-display text-center mb-2">
        Welcome to your fitness journey
      </h1>

      <p className="text-sm text-center mb-4 tracking-wide">
        Start your workout experience and push your limits.
      </p>

      <div className="flex flex-col gap-4 w-full px-6">
        <button className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition duration-300">
          Login
        </button>
        <button className="w-full border border-black bg-secondary-400 text-black py-3 rounded-lg text-lg font-semibold hover:bg-secondary-300 hover:text-main transition duration-300">
          Register
        </button>
      </div>
    </div>
  );
};

export default HeroBox;
