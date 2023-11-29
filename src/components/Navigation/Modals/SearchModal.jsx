import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchInput from "../inputs/SearchInput";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function SearchModal({ showSearchModal, toggleSearchModal }) {
  return (
    <div
      className={`z-50 top-0 w-full max-w-screen h-screen bg-black/50 ${
        showSearchModal ? "fixed" : "hidden"
      }`}
    >
      <div className="m-4 mx-auto w-11/12">
        <div
          onClick={toggleSearchModal}
          className="bg-white flex ml-auto mb-8 justify-center items-center rounded"
          style={{ height: 48, width: 48 }}
        >
          <FontAwesomeIcon
            icon={faXmark}
            style={{ color: "#000000", height: 32 }}
          />
        </div>
        <SearchInput />
      </div>
    </div>
  );
}

export default SearchModal;
