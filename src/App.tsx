import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
// import UserProfile from "./pages/UserProfile";
import { ProfileProvider } from "./hook/profileContext";
import HomePage from "./pages/HomePage";
import Strength from "./pages/Strength";

const App = () => {

  return (
    <ProfileProvider>
      <BrowserRouter basename="/gain-track">
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" />} />
          {/*<Route path="/user-profile" element={<UserProfile />} />*/}
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/strength" element={<Strength />} />
        </Routes>
      </BrowserRouter>
    </ProfileProvider>
  );
};

export default App;
