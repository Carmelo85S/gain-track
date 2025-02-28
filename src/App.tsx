import { HashRouter, Routes, Route } from "react-router-dom"
import SignIn from "./pages/form/signIn/SignIn"
import SignUp from "./pages/form/signUp/SignUp";
import Home from "./pages/home/Home"
import ManWorkout from "./pages/man-workout/ManWorkout";
import FemaleWorkout from "./pages/woman-workout/FemaleWorkout";
import ProfileForm from "./pages/form/profile/ProfileForm";
import './index.css';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/signin" element={ <SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile-form" element={<ProfileForm />} />
        <Route path="/man-workout" element={<ManWorkout />} />
        <Route path="/woman-workout" element={<FemaleWorkout />} />
      </Routes>
    </HashRouter>
  )
}

export default App
