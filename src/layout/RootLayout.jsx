import Navbar from "../components/Navbar.jsx";
import Connect from "../components/Connect.jsx";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-18">
        <Outlet />
      </div>
      <Connect />
    </div>
  );
};

export default RootLayout;
