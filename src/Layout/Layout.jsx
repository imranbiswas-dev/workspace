import { Outlet } from "react-router";
import Navbar from "../Components/Header/Navbar";


const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="border-b border-gray-300"></div>
      <Outlet />
    </div>
  );
};

export default Layout;
