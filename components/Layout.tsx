import React from "react";
import SearchInput from "./SearchInput";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen flex">
      <Sidebar />
      <main className="w-full h-full px-4 py-6 flex flex-col min-w-[800px] grow ml-40">
        <div
        className="pl-6"></div>
        <SearchInput />
        {children}
      </main>
    </div>
  );
};

export default Layout;
