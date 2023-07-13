import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";

const RootLayout = () => {
  return (
    <div className="m-3">
      <Sidebar />
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
