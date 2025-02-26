import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./pages/form/signIn/SignIn"
import SignUp from "./pages/form/signUp/SignUp";
import Home from "./pages/home/Home"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/signin" element={ <SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
