import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import useFormState from "../../hook/useFormState";

const Register = () => {
    const { email, setEmail, password, setPassword, error, setError, confirmPassword, setConfirmPassword } = useFormState();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            setError("All fields are required");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setError("");
        console.log("User registered:", { email, password });
        navigate('/user-profile');
        // Logic to send data
    };

    return (
        <section className="w-full min-h-screen flex justify-center items-center bg-primary-100 px-4">
            <div className="max-w-md w-full xs:max-w-xs bg-primary-200 p-6 xs:p-4 rounded-2xl shadow-lg flex flex-col items-center text-white">
                <img src={Logo} className="w-32 xs:w-20 object-contain mb-4" alt="Logo" />
                <p className="text-sm xs:text-xs text-secondary-300 text-center">
                    Track your gains and progress easily
                </p>

                {error && (
                    <p className="text-red-500 text-sm text-center mt-2 min-h-[20px] animate-pulse">
                        {error}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-semibold">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 mt-1 rounded-lg bg-primary-100 border border-secondary-300 focus:ring-2 focus:ring-secondary-300 outline-none"
                            placeholder="Insert your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 mt-1 rounded-lg bg-primary-100 border border-secondary-300 focus:ring-2 focus:ring-secondary-300 outline-none"
                            placeholder="Insert your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full p-2 mt-1 rounded-lg bg-primary-100 border border-secondary-300 focus:ring-2 focus:ring-secondary-300 outline-none"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 mt-4 bg-secondary-300 text-primary-100 hover:bg-yellow-500 rounded-lg font-semibold transition-all"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center text-sm mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-accent-100 hover:underline">
                        Log in here
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Register;
