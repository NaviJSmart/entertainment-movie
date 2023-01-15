import React from "react";
import SearchInput from "./SearchInput";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex">
      <Sidebar />
      <main className="w-full h-full px-4 py-6 flex flex-col lg:min-w-[800px]  ml-40">
        <div className="">
          <SearchInput />
        </div>

        {children}
      </main>
    </div>
  );
};

export default Layout;
