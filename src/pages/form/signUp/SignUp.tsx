import { useState } from "react";
import Button from "../../../components/button/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password", confirmPassword);

    // Logic auth
  };

  const navigate = useNavigate();

  return (
    <div className="md:hidden xs:bg-form-bg xs:bg-no-repeat xs:bg-center xs:bg-cover flex flex-col justify-center h-screen">
      <form 
        className="w-5/6 bg-black bg-opacity-65 shadow-md rounded-lg p-6 mx-auto flex flex-col"
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
          className="p-2 border border-gray-300 rounded-md w-full mb-4 focus:ring focus:ring-blue-200"
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
          className="p-2 border border-gray-300 rounded-md w-full mb-4 focus:ring focus:ring-blue-200"
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
          className="p-2 border border-gray-300 rounded-md w-full mb-4 focus:ring focus:ring-blue-200"
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
          className="p-2 border border-gray-300 rounded-md w-full mb-4 focus:ring focus:ring-blue-200"
        />  

        <div className="w-full flex justify-center">
          <Button label="Sign Up" type="submit" />
        </div>
        <div className="flex justify-center items-center pt-4">
          <p className="text-main text-xs pr-2">Already have an account?</p>
          <a className="text-main text-xs" onClick={() => navigate("/signin")}>Sign in here</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
