import { useState } from "react";
import Button from "../../../components/button/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password", confirmPassword);

    navigate("/profile-form")

    // Logic auth
  };


  return (
    <div className="no-overflow md:hidden xs:bg-form-bg xs:bg-no-repeat xs:bg-center xs:bg-contain xs:flex xs:flex-col xs:justify-center xs:items-center xs:h-screen xs:touch-none">
      <form 
        className="w-5/6 p-2 bg-black bg-opacity-65 shadow-md rounded-md mx-auto flex flex-col"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="mb-2 text-main font-semibold">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Insert your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded-md w-full mb-4 focus:ring focus:ring-blue-200 font-sans"
        />

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

        <label htmlFor="confirm password" className="mb-2 text-main font-semibold">
          Confirm Password
        </label>    
        <input
          type="password"
          name="confirm password"
          id="confirm password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded-md w-full mb-4 focus:ring focus:ring-blue-200 font-sans"
        />  

        <div className="w-full flex justify-center">
          <Button label="Sign Up" type="submit" />
        </div>
        <div className="flex justify-center items-center pt-4">
          <p className="text-main text-xs font-sans pr-2">Already have an account?</p>
          <a className="text-main text-xs font-sans" onClick={() => navigate("/signin")}>Sign in here</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
