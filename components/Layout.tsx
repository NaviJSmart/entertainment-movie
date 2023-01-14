import React from "react";
import SearchInput from "./SearchInput";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen flex">
      <Sidebar />
      <main className="w-full h-full flex flex-col grow">
        {children}
      </main>
    </div>
  );
};

export default Layout;
