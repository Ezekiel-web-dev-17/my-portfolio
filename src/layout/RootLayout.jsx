import Navbar from "../components/Navbar.jsx";
import Connect from "../components/Connect.jsx";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Connect />
    </div>
  );
};

export default RootLayout;
