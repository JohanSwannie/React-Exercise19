import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="sticky h-12 bg-black p-3">
      <NavLink to="/" className="text-white mr-8">
        Home
      </NavLink>
      <NavLink to="/about" className="text-white mr-8">
        About
      </NavLink>
      <NavLink to="/showroom" className="text-white mr-8">
        Show Room
      </NavLink>
      <NavLink to="/tradeins" className="text-white mr-8">
        Trade Ins
      </NavLink>
    </div>
  );
}

export default Navigation;
