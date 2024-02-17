import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="sticky h-12 bg-[#282884] p-3 text-white grid grid-cols-12 gap-1">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/showroom">Show Room</NavLink>
      <NavLink to="/tradeins">Trade Ins</NavLink>
    </div>
  );
}

export default Navigation;
