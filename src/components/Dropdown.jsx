import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ROUTES from "../ROUTES";

function Dropdown() {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const { GAMING, NEWS, POLITICS, SPORTS, TECH, SCIENCE } = ROUTES;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="select-none" ref={dropdownRef}>
      <h2
        id="text"
        onClick={toggleDropdown}
        className={`text-md text-orange-500 font-bold border-orange-200 border-b-4 hover:border-orange-400 transition hover:cursor-pointer ${
          isOpen ? "border-orange-400" : ""
        }`}
      >
        Topics{" "}
        <FontAwesomeIcon
          className={`transition ${isOpen ? "rotate-180" : ""}`}
          id="icon"
          icon={faCaretDown}
          style={{ color: "#f97316" }}
        />
      </h2>
      {/* invisible dropdown content */}
      <div
        className={`absolute shadow-lg bg-white mt-4 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 p-4">
          <Link to={GAMING}>Gaming</Link>
          <Link to={NEWS}>News</Link>
          <Link to={POLITICS}>Politics</Link>
          <Link to={SPORTS}>Sports</Link>
          <Link to={TECH}>Technology</Link>
          <Link to={SCIENCE}>Science</Link>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;

// className="text-md text-orange-500 border-orange-200 border-b-4 hover:border-orange-400 transition hover:cursor-pointer"
