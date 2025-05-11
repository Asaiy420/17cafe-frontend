import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login.js";
import Home from "../pages/Home.js";
import SignUp from "../pages/SignUp.js";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
};
export default AppRoutes;
