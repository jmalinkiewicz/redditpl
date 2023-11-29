import { Link } from "react-router-dom";

function MobileLink({ ROUTE, name }) {
  return (
    <li className="text-2xl font-semibold h-24 grid place-items-center">
      <Link to={ROUTE}>{name}</Link>
    </li>
  );
}

export default MobileLink;
