import redditLogo from "../../assets/logo.svg";
import Dropdown from "./Dropdown/Dropdown";
import SearchInput from "./inputs/SearchInput";
import { Link } from "react-router-dom";
import ROUTES from "../../ROUTES";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SearchModal from "./Modals/SearchModal";
import { useState } from "react";
import NavbarMobile from "./Mobile/NarbarMobile";

const { MAIN } = ROUTES;

function Navbar() {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showNavbarMobile, setShowNavbarMobile] = useState(false);

  function toggleSearchModal() {
    setShowSearchModal(!showSearchModal);
  }

  function toggleNavbarMobile() {
    setShowNavbarMobile(!showNavbarMobile);
    const body = document.querySelector("body");
    body.style.position = showNavbarMobile ? "static" : "fixed";
  }

  return (
    <>
      <NavbarMobile showNavbarMobile={showNavbarMobile} />
      <SearchModal
        showSearchModal={showSearchModal}
        toggleSearchModal={toggleSearchModal}
      />
      <div className="fixed w-full top-0 z-20 bg-white p-2 grid grid-cols-3 md:grid-cols-10 h-14 shadow-lg">
        <div className="col-start-2 md:col-start-1 md:col-span-3 md:justify-self-auto justify-self-center flex items-center gap-1 select-none">
          <Link className="flex items-center gap-1" to={MAIN}>
            <h1 className="font-bold text-2xl ml-4">
              Reddit<span className="text-red-500">PL</span>
            </h1>
            <img src={redditLogo} className="w-8" />
          </Link>
        </div>
        <div className="col-span-4 hidden md:block">
          <SearchInput />
        </div>
        <div className="col-span-3 hidden md:flex justify-center items-center">
          <Dropdown />
        </div>
        <div className="justify-self-end md:hidden flex gap-4 mr-4">
          <div
            onClick={toggleSearchModal}
            className="flex justify-center items-center h-full"
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#000000", height: 24 }}
            />
          </div>
          <div
            onClick={toggleNavbarMobile}
            className="flex justify-center items-center h-full"
          >
            <FontAwesomeIcon
              icon={faBars}
              style={{ color: "#000000", height: 24 }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
