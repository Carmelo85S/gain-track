import { useState } from "react";
import Logo from "../../assets/Logo.png";

const Login = () => {
    const [email, setEmail] = useState<string>("");  
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(!email || !password){
            setError("Insert email and password");
            return;
        }

        setError("");
        console.log("Login con: ", { email, password });

        //insert logic auth here
    };

    return (
        <section className="w-full mx-auto h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center p-6 rounded-lg bg-white shadow-black shadow-2xl">
                <img 
                    src={Logo}
                    className="w-32 object-contain mb-4"
                    alt="Logo image" 
                />
                <p className="text-sm text-gray-600 text-center">
                    Track your gains and progress easily
                </p>

                {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}

                <form onSubmit={handleSubmit} className="w-full flex flex-col items-center  gap-4 p-4 rounded-md">
                    <div className="w-full">
                        <label className="block text-primary-100 font-semibold text-sm">Email</label>
                        <input 
                            type="email" 
                            className="w-full h-10 border border-secondary-300 rounded text-sm pl-2"
                            placeholder="Insert your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-primary-100 font-semibold text-sm">Password</label>
                        <input 
                            type="password" 
                            className="w-full h-10 border border-secondary-300 rounded text-sm pl-2"
                            placeholder="Insert your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button 
                        type="submit"
                        className="w-full bg-primary-100 text-white py-2 rounded hover:bg-primary-200 transition"
                    >
                        Submit
                    </button>
                </form>

                <p className="text-center text-sm text-primary-100 mt-4">
                    Don't you have an account? 
                    <a href="#" className="text-blue-500 hover:underline"> Register here</a>
                </p>
            </div>
        </section>
    );
};

export default Login;
