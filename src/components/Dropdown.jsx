import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Dropdown() {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    "Gaming",
    "News",
    "Politics",
    "Programing",
    "Science",
    "Technology",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        const dropdownContent = document.querySelector(".absolute");
        dropdownContent.classList.add("hidden");
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function toggleDropdown() {
    const dropdownContent = document.querySelector(".absolute");
    const icon = document.getElementById("icon");
    dropdownContent.classList.toggle("hidden");
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
        className={`absolute flex-col gap-4 p-4 shadow-lg bg-white mt-4 w-44 transition ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {categories.map((category) => (
          <h2
            key={category}
            className="text-md text-orange-500 font-bold border-orange-200 border-b-4 hover:border-orange-400 transition hover:cursor-pointer"
          >
            {category}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
