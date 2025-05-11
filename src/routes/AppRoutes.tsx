import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login.js";
import Home from "../pages/Home.js";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
export default AppRoutes;
