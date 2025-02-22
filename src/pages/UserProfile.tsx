import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import { useProfile } from "../hook/profileContext"

const UserProfile = () => {
  const { name, setName, age, setAge, height, setHeight, weight, setWeight } = useProfile();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !age || !height || !weight) {
      alert('Please fill in all fields!');
      return;
    }

    navigate('/home-page');
    console.log('User Data Saved:', { name, age, height, weight });
    // database logic here
  };

  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-gradient px-4">
      <div className="w-full max-w-lg xs:max-w-xs p-8 xs:p-6 rounded-2xl shadow-lg flex flex-col items-center text-white">
        <img src={Logo} className="w-16 xs:w-24 object-contain mb-6" alt="Logo" />
        <h2 className="text-2xl xs:text-xl font-bold mb-2">Welcome!</h2>
        <p className="text-secondary-300 mb-6 text-center text-sm xs:text-xs">
          Track your progress and achieve your goals.
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
          <div className="w-full">
            <label className="block text-secondary-400 font-semibold text-sm sm:text-xs">Name</label>
            <input
              type="text"
              className="w-full h-12 border border-secondary-300 bg-primary-100 rounded-lg text-sm sm:text-xs pl-3 text-white focus:ring-2 focus:ring-secondary-300 focus:outline-none transition-all duration-300 ease-in-out"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label className="block text-secondary-400 font-semibold text-sm sm:text-xs">Age</label>
            <input
              type="number"
              className="w-full h-12 border border-secondary-300 bg-primary-100 rounded-lg text-sm sm:text-xs pl-3 text-white focus:ring-2 focus:ring-secondary-300 focus:outline-none transition-all duration-300 ease-in-out"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
            />
          </div>
          <div className="w-full">
            <label className="block text-secondary-400 font-semibold text-sm sm:text-xs">Height (cm)</label>
            <input
              type="number"
              className="w-full h-12 border border-secondary-300 bg-primary-100 rounded-lg text-sm sm:text-xs pl-3 text-white focus:ring-2 focus:ring-secondary-300 focus:outline-none transition-all duration-300 ease-in-out"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
            />
          </div>
          <div className="w-full">
            <label className="block text-secondary-400 font-semibold text-sm sm:text-xs">Weight (kg)</label>
            <input
              type="number"
              className="w-full h-12 border border-secondary-300 bg-primary-100 rounded-lg text-sm sm:text-xs pl-3 text-white focus:ring-2 focus:ring-secondary-300 focus:outline-none transition-all duration-300 ease-in-out"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-secondary-300 text-white font-semibold py-3 rounded-lg hover:bg-secondary-400 transition text-sm sm:text-xs"
          >
            Save Profile
          </button>
        </form>
      </div>
    </section>
  );
};

export default UserProfile;
