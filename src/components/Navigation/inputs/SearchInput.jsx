import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchInput() {
  return (
    <form className="h-full">
      <div className="h-full shadow-md flex">
        <input
          type="text"
          className="relative z-40 grow p-2 h-full bg-neutral-200 focus:bg-neutral-100 focus:outline-none ring-offset-0 ring-0 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 transition box-border"
        />
        <button className="font-bold w-10 h-10 bg-orange-500 hover:bg-orange-300 transition self-center">
          <div>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#ffffff" }}
            />
          </div>
        </button>
      </div>
    </form>
  );
}

export default SearchInput;
