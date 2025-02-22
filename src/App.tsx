import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import { ProfileProvider } from "./hook/profileContext";
import HomePage from "./pages/HomePage";

const App = () => {

  return (
    <ProfileProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/user-profile" />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/home-page" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ProfileProvider>
  );
};

export default App;
