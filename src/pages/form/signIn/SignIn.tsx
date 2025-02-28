import { useState } from "react";
import Button from "../../../components/button/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    if(email === "info@gmail.com" && password === "1234"){
      navigate("/profile-form");
    }

    // Logic auth
  };


  return (
    <div className="md:hidden xs:bg-form-bg xs:bg-no-repeat xs:bg-center xs:bg-contain xs:flex xs:flex-col xs:justify-center xs:items-center xs:max-w-full xs:w-full xs:h-screen">
      <form 
        className="w-5/6 p-2 bg-black bg-opacity-65 shadow-md rounded-md mx-auto flex flex-col"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email" className="mb-2 text-main font-semibold">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Insert your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded-md w-full mb-4 focus:ring focus:ring-blue-200 font-sans"
        />

        <label htmlFor="password" className="mb-2 text-main font-semibold">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Insert your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded-md w-full mb-4 focus:ring focus:ring-blue-200 font-sans"
        />

        <div className="w-full flex justify-center">
          <Button label="Sign In" type="submit" />
        </div>
        <div className="flex justify-center items-center pt-4">
          <p className="text-main text-xs pr-2 font-sans">Don't you have an account?</p>
          <a className="text-main text-xs font-sans" onClick={() => navigate("/signup")}>Register here</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
