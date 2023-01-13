import React from "react";
import NavItem from "./NavItem";

const Sidebar = (): JSX.Element => {
  return (
    <nav className="bg-[#1D1933] sticky w-36 p-3 flex rounded-2xl justify-center min-h-full">
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
