import { Outlet } from "react-router-dom";
import Navbar from "../components/Navigation/Navbar";

function Root() {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
