import React from "react";
import NavItem from "./NavItem";

const Sidebar = (): JSX.Element => {
  return (
    <nav className="bg-slate-800 sticky w-32 rounded-md p-3 flex justify-center min-h-full">
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
