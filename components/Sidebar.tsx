import React from "react";
import NavItem from "./NavItem";

const Sidebar = (): JSX.Element => {
  return (
    <nav className="bg-slate-800 sticky w-32 rounded-md p-4 flex justify-center min-h-full">
      <ul className="flex flex-col justify-between  h-[200px] pt-6">
        <NavItem navTitle="Home" />
        <NavItem navTitle="Movie" />
        <NavItem navTitle="TV Show" />
        <NavItem navTitle="Favorite" />
      </ul>
    </nav>
  );
};

export default Sidebar;
