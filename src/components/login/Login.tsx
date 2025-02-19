import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import useFormState from "../../hook/useFormState";

const Login = () => {
    const { email, setEmail, password, setPassword, error, setError } = useFormState();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Insert email and password");
            return;
        }

        //fake auth
        if (email === "admin@example.com" && password === "123") {
            setError("");
            console.log("Login success:", { email });
            navigate("/user-profile");
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <section className="w-full min-h-screen flex justify-center items-center bg-primary-100 px-4">
            <div className="max-w-md w-full xs:max-w-xs bg-primary-200 p-6 xs:p-4 rounded-2xl shadow-lg flex flex-col items-center text-white">
                <img src={Logo} className="w-32 xs:w-20 object-contain mb-4" alt="Logo" />
                <p className="text-sm xs:text-xs text-secondary-300 text-center">
                    Track your gains and progress easily
                </p>

                {error && <p className="text-red-500 text-sm xs:text-xs text-center mt-2 min-h-[20px]">{error}</p>}

                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 mt-4">
                    <div className="w-full">
                        <label className="block text-secondary-300 font-semibold text-sm xs:text-xs">Email</label>
                        <input 
                            type="email" 
                            className="w-full h-10 border border-secondary-300 bg-primary-100 rounded-lg text-sm xs:text-xs pl-2 text-white focus:ring-2 focus:ring-secondary-300 focus:outline-none"
                            placeholder="Insert your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-secondary-300 font-semibold text-sm xs:text-xs">Password</label>
                        <input 
                            type="password" 
                            className="w-full h-10 border border-secondary-300 bg-primary-100 rounded-lg text-sm xs:text-xs pl-2 text-white focus:ring-2 focus:ring-secondary-300 focus:outline-none"
                            placeholder="Insert your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button 
                        type="submit"
                        className="w-full bg-secondary-300 text-primary-100 font-semibold py-2 rounded-lg hover:bg-secondary-400 transition text-sm xs:text-xs"
                    >
                        Submit
                    </button>
                </form>

                <p className="text-center text-sm xs:text-xs mt-4">
                    Don't have an account? 
                    <a href="/register" className="text-accent-100 hover:underline"> Sign up here</a>
                </p>
            </div>
        </section>
    );
};

export default Login;
