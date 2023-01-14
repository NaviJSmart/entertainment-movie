import React from "react";
import NavItem from "./NavItem";

const Sidebar = (): JSX.Element => {
  return (
    <nav className="  bg-[#1d1933c0] fixed top-0 z-50 h-full min-w-[150px] flex justify-center">
      <ul className="flex flex-col justify-between  h-[200px] pt-6">
        <NavItem navTitle="home" />
        <NavItem navTitle="movie" />
        <NavItem navTitle="tv shows" />
        <NavItem navTitle="favorite" />
      </ul>
    </nav>
  );
};

export default Sidebar;
// bg-[#1D1933]
