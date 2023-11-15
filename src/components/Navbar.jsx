import redditLogo from "../assets/logo.svg";
import Dropdown from "./Dropdown";
import SearchInput from "./inputs/SearchInput";

function Navbar() {
  return (
    <div className="p-2 grid grid-cols-10 h-14 shadow-lg">
      <div className=" col-span-3 flex items-center gap-1">
        <h1 className="font-bold text-2xl ml-4">
          Reddit<span className="text-red-500">PL</span>
        </h1>
        <img src={redditLogo} className="w-8" />
      </div>
      <div className="col-span-4">
        <SearchInput />
      </div>
      <div className="col-span-3 flex justify-center items-center">
        <Dropdown />
      </div>
    </div>
  );
}

export default Navbar;
