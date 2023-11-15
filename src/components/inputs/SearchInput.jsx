import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchInput() {
  return (
    <form className="h-full">
      <div className="h-full shadow-md">
        <input
          type="text"
          className="relative z-40 p-2 h-full w-11/12 bg-neutral-200 focus:bg-neutral-100 focus:outline-none ring-offset-0 ring-0 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 transition box-border"
        />
        <button className="font-bold bg-orange-500 h-full w-1/12 hover:bg-orange-300 transition">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#ffffff" }}
          />
        </button>
      </div>
    </form>
  );
}

export default SearchInput;
