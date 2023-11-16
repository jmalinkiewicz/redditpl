import { Outlet } from "react-router-dom";
import Navbar from "../components/Navigation/Navbar";

function Root() {
  return (
    <>
      <Navbar />
      <div className="m-6">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
