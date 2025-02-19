import Logo from "../assets/Logo.png";
import useProfileState from "../hook/useProfileState";

const UserProfile = () => {
    const {
        name, setName,
        age, setAge,
        height, setHeight,
        weight, setWeight,
    } = useProfileState();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !age || !height || !weight) {
            alert("Please fill in all fields!");
            return;
        }
        console.log("User Data Saved:", { name, age, height, weight });
        // Database logic here
    };

    return (
        <section className="w-full min-h-screen flex justify-center items-center bg-primary-100 px-4">
            <div className="w-full max-w-lg xs:max-w-xs bg-primary-200 p-8 xs:p-6 rounded-2xl shadow-lg flex flex-col items-center text-white">
                <img src={Logo} className="w-24 xs:w-20 object-contain mb-4" alt="Logo" />
                <h2 className="text-2xl xs:text-xl font-bold mb-2">Welcome!</h2>
                <p className="text-secondary-300 mb-6 text-center text-sm xs:text-xs">
                    Track your progress and achieve your goals.
                </p>

                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-semibold">Name</label>
                        <input
                            type="text"
                            className="w-full p-2 mt-1 rounded-lg bg-primary-100 border border-secondary-300 focus:ring-2 focus:ring-secondary-300 outline-none text-sm"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold">Age</label>
                        <input
                            type="number"
                            className="w-full p-2 mt-1 rounded-lg bg-primary-100 border border-secondary-300 focus:ring-2 focus:ring-secondary-300 outline-none text-sm"
                            placeholder="Enter your age"
                            value={age}
                            onChange={(e) => setAge(e.target.value ? Number(e.target.value) : "")}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold">Height (cm)</label>
                        <input
                            type="number"
                            className="w-full p-2 mt-1 rounded-lg bg-primary-100 border border-secondary-300 focus:ring-2 focus:ring-secondary-300 outline-none text-sm"
                            placeholder="Enter your height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value ? Number(e.target.value) : "")}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold">Weight (kg)</label>
                        <input
                            type="number"
                            className="w-full p-2 mt-1 rounded-lg bg-primary-100 border border-secondary-300 focus:ring-2 focus:ring-secondary-300 outline-none text-sm"
                            placeholder="Enter your weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value ? Number(e.target.value) : "")}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 mt-4 bg-secondary-300 text-primary-100 hover:bg-yellow-500 rounded-lg font-semibold transition-all text-sm"
                    >
                        Save Profile
                    </button>
                </form>
            </div>
        </section>
    );
};

export default UserProfile;
