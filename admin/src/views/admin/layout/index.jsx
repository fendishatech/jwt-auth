import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
const index = () => {
  return (
    <>
      <Sidebar />
      <div className="content">
        <TopNav />
        <Outlet />
      </div>
    </>
  );
};

export default index;
