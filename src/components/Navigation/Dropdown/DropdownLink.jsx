import { Link } from "react-router-dom";

function DropdownLink({ ROUTE, name }) {
  return (
    <Link
      className="text-md w-28 text-orange-500 border-orange-200 border-b-4 hover:border-orange-400 transition duration-75"
      to={ROUTE}
    >
      {name}
    </Link>
  );
}
export default DropdownLink;
