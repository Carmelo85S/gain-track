import React, { useState } from 'react';
import Button from '../../../components/button/Button';
import { useNavigate } from 'react-router-dom';

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
        <div className="md:hidden xs:bg-profile-bg xs:bg-no-repeat xs:bg-center xs:bg-cover flex flex-col justify-center h-screen">
            <div>
                <h1 className="text-center text-white text-6xl font-bold mx-auto w-5/6 tracking-widest">CREATE</h1>
                <h2 className='text-center mb-4 font-bold mx-auto w-5/6 h-10 bg-primary-100 rounded-lg text-black my-5 text-3xl tracking-wide'>
                    YOUR PROFILE
                </h2>
            </div>
            
            <form 
                className="w-5/6 bg-black bg-opacity-65 shadow-md rounded-lg p-6 mx-auto flex flex-col"
                onSubmit={handleSubmit}
            >

                {/* Gender */}
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                    <label htmlFor="male" className="text-main font-semibold mr-3">Male</label>
                        <input 
                            type="radio" 
                            name="gender" 
                            value="male" 
                            placeholder="male"
                            checked={gender === "male"} 
                            onChange={() => setGender("male")}
                        />
                    </div>
                    <div className="flex items-center">
                    <label htmlFor="female" className="text-main font-semibold m-3">Female</label>       
                        <input 
                            type="radio" 
                            name="gender" 
                            value="female" 
                            checked={gender === "female"} 
                            onChange={() => setGender("female")}
                        />
                    </div>
                </div>

                {/* Age */}
                <label htmlFor="age" className="mb-5 text-main font-semibold">Age</label>
                <input 
                    type="number" 
                    name="age" 
                    id="age" 
                    value={age}
                    min="1"
                    max="120"
                    placeholder="18"
                    className="p-2 rounded"
                    onChange={(e) => setAge(parseInt(e.target.value) || 0)}
                />

                {/* Weight */}
                <label htmlFor="weight" className="my-5 text-main font-semibold">Weight (kg)</label>
                <input 
                    type="number" 
                    name="weight" 
                    id="weight"
                    value={weight}
                    min="30"
                    max="300"
                    placeholder="75"
                    className="p-2 rounded"
                    onChange={(e) => setWeight(parseInt(e.target.value) || 0)}
                />

                {/* Submit Button */}
                <div className="w-full flex justify-center mt-4">
                    <Button label="Start" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default ProfileForm;
