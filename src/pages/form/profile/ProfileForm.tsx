import React, { useState } from 'react';
import Button from '../../../components/button/Button';
import { useNavigate } from 'react-router-dom';
import Heading from '../../../components/heading/Heading';

const ProfileForm = () => {
    const [gender, setGender] = useState<string>("");
    const [age, setAge] = useState<number>();
    const [weight, setWeight] = useState<number>();

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Gender:", gender);
        console.log("Age:", age);
        console.log("Weight:", weight);
        navigate(gender === "female" ? "/female-workout" : "/man-workout");
    };

    return (
        <div className="md:hidden xs:w-full xs:h-screen xs:flex xs:flex-col xs:justify-center xs:items-center xs:bg-profile-bg xs:bg-no-repeat xs:bg-center xs:bg-cover xs:touch-none">
            {/* Heading */}
            <div className="w-full bg-black bg-opacity-65 shadow-md rounded-lg flex flex-col items-center text-center">
                <Heading labelH1="CREATE" labelH2="YOUR PROFILE" />
            </div>

            {/* Form */}
            <form className="w-full max-w-md bg-black bg-opacity-65 shadow-md rounded-lg p-6 mx-auto flex flex-col" onSubmit={handleSubmit}>
                
                {/* Gender */}
                <div className="w-3/5 flex justify-between items-center mb-2">
                    <div className="flex items-center">
                        <label htmlFor="male" className="text-main font-semibold mr-3">Male</label>
                        <input 
                            id="male"
                            type="radio" 
                            name="gender" 
                            value="male" 
                            checked={gender === "male"} 
                            onChange={() => setGender("male")}
                            aria-label="Select Male"
                        />
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="female" className="text-main font-semibold mr-3">Female</label>
                        <input 
                            id="female"
                            type="radio" 
                            name="gender" 
                            value="female" 
                            checked={gender === "female"} 
                            onChange={() => setGender("female")}
                            aria-label="Select Female"
                        />
                    </div>
                </div>

                {/* Age & Weight */}
                <div className="w-full flex sm:flex-row justify-between items-center gap-x-4">
                    {/* Age */}
                    <div className="flex items-center gap-x-2">
                        <label htmlFor="age" className="text-main font-semibold">Age</label>
                        <input 
                            type="number" 
                            id="age"
                            value={age || ""}
                            min="1"
                            max="120"
                            placeholder="18"
                            className="w-16 p-2 rounded text-center"
                            onChange={(e) => setAge(e.target.value ? parseInt(e.target.value) : undefined)}
                        />
                    </div>

                    {/* Weight */}
                    <div className="flex items-center gap-x-2">
                        <label htmlFor="weight" className="text-main font-semibold">Weight (kg)</label>
                        <input 
                            type="number" 
                            id="weight"
                            value={weight || ""}
                            min="30"
                            max="300"
                            placeholder="75"
                            className="w-16 p-2 rounded text-center"
                            onChange={(e) => setWeight(e.target.value ? parseInt(e.target.value) : undefined)}
                        />
                    </div>
                </div>


                {/* Submit Button */}
                <div className="w-full flex justify-center mt-4">
                    <Button label="Start" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default ProfileForm;
