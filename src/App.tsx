import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navigate } from "react-router-dom"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import UserProfile from "./pages/UserProfile"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user-profile" element={<UserProfile />} />
    </Routes>

    </BrowserRouter>
  )
}
export default App
