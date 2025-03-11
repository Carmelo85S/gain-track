const Navbar = () => {
  return (
    <nav className="md:hidden w-full bg-main text-black flex justify-between items-center px-6 py-4 shadow-md">
      <h1 className="text-2xl font-display tracking-wider">Gain Track</h1>
      <div className="w-3/5 flex justify-between">
        <button className="bg-primary-100 text-black font-semibold w-2/6 py-2 rounded-lg transition duration-300 hover:bg-primary-200">
            Login
        </button>
        <button className="border border-black text-black font-semibold px-4 py-2 rounded-lg transition duration-300 hover:bg-primary-200">
            Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
