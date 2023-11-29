import MobileLink from "./MobileLink";
import ROUTES from "../../../ROUTES";

function NavbarMobile({ showNavbarMobile }) {
  const { GAMING, NEWS, POLITICS, SPORTS, TECH, SCIENCE } = ROUTES;

  return (
    <div
      className={`top-0 z-10 h-screen w-screen bg-white fixed transition-all duration-500 shadow-xl ${
        showNavbarMobile ? "left-0" : "left-full"
      }`}
    >
      <div className="h-full grid place-items-center">
        <ul className="flex flex-col divide-y-2 w-full">
          <MobileLink ROUTE={GAMING} name="Gaming" />
          <MobileLink ROUTE={NEWS} name="News" />
          <MobileLink ROUTE={POLITICS} name="Politics" />
          <MobileLink ROUTE={SPORTS} name="Sports" />
          <MobileLink ROUTE={TECH} name="Tech" />
          <MobileLink ROUTE={SCIENCE} name="Science" />
        </ul>
      </div>
    </div>
  );
}

export default NavbarMobile;
