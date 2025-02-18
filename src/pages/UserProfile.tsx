import { useState } from "react";
import Logo from "../assets/Logo.png";

const UserProfile = () => {
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number | "">("");
    const [height, setHeight] = useState<number | "">("");
    const [weight, setWeight] = useState<number | "">("");
    const [trainingType, setTrainingType] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !age || !height || !weight || !trainingType) {
            alert("All fields are required!");
            return;
        }

        console.log("User Data Saved:", { name, age, height, weight, trainingType });

        // database data logic here
    };

    return (
        <section className="w-full mx-auto h-screen flex justify-center items-center">
            <div className="max-w-md flex flex-col justify-center items-center p-6 rounded-lg bg-white shadow-black shadow-2xl">
                <img 
                    src={Logo}
                    className="w-32 object-contain mb-4"
                    alt="Logo image" 
                />
                <p className="text-sm text-gray-600 text-center">
                    Track your gains and progress easily
                </p>

                <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4 p-4 rounded-md">
                    <div className="w-full">
                        <label className="block text-primary-100 font-semibold text-sm">Name</label>
                        <input 
                            type="text" 
                            className="w-full h-10 border border-secondary-300 rounded text-sm pl-2"
                            placeholder="Insert your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-primary-100 font-semibold text-sm">Age</label>
                        <input 
                            type="number" 
                            className="w-full h-10 border border-secondary-300 rounded text-sm pl-2"
                            placeholder="Insert your age"
                            value={age}
                            onChange={(e) => setAge(e.target.value ? Number(e.target.value) : "")}
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-primary-100 font-semibold text-sm">Height (cm)</label>
                        <input 
                            type="number" 
                            className="w-full h-10 border border-secondary-300 rounded text-sm pl-2"
                            placeholder="Insert your height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value ? Number(e.target.value) : "")}
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-primary-100 font-semibold text-sm">Weight (kg)</label>
                        <input 
                            type="number" 
                            className="w-full h-10 border border-secondary-300 rounded text-sm pl-2"
                            placeholder="Insert your weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value ? Number(e.target.value) : "")}
                        />
                    </div>

                    <div className="w-full">
                        <label className="block text-primary-100 font-semibold text-sm">Training Type</label>
                        <select
                            className="w-full h-10 border border-secondary-300 rounded text-sm pl-2"
                            value={trainingType}
                            onChange={(e) => setTrainingType(e.target.value)}
                        >
                            <option value="" disabled>Select training type</option>
                            <option value="Weight Loss">Weight Loss</option>
                            <option value="Muscle Gain">Muscle Gain</option>
                            <option value="Toning">Toning</option>
                            <option value="Strength">Strength</option>
                        </select>
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-primary-100 text-white py-2 rounded hover:bg-primary-200 transition"
                    >
                        Save
                    </button>
                </form>
            </div>
        </section>
    );
};

export default UserProfile;
