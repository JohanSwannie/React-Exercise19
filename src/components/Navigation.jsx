import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="sticky h-10 bg-black">
      <NavLink to="/" className="text-white mr-8">
        Home
      </NavLink>
      <NavLink to="/about" className="text-white">
        About
      </NavLink>
    </div>
  );
}

export default Navigation;
