import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="sticky h-12 bg-[#282884]">
      <div className="p-3 text-white grid grid-cols-5 w-3/4 mx-auto">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/showroom">Show Room</NavLink>
        <NavLink to="/tradeins">Trade Ins</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  );
}

export default Navigation;
