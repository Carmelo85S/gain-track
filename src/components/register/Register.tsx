
import Logo from "../../assets/Logo.png";
import useFormState from "../../hook/useFormState";

const Register = () => {

    const { email, setEmail, password, setPassword, error, setError, confirmPassword, setConfirmPassword } = useFormState();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(!email || !password || !confirmPassword){
            setError("All fields are required");
            return;
        }

        if(password !== confirmPassword){
            setError("Password doesn't match.");
            return;
        }

        setError("");
        console.log("User registered:", { email, password });

        //insert logic send
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

                {error && <p className="text-red-500 text-sm text-center mt-2 min-h-[20px]">{error}</p>}

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
                    <div className="w-full">
                        <label className="block text-primary-100 font-semibold text-sm">Confirm password</label>
                        <input 
                            type="password" 
                            className="w-full h-10 border border-secondary-300 rounded text-sm pl-2"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
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
                    Do you have an account?
                    <a href="/login" className="text-blue-500 hover:underline"> Sign up here</a>
                </p>
            </div>
        </section>
    );
};

export default Register;
