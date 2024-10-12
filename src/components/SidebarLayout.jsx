import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import MobileSidebar from "./MobileSidebar";

const SidebarLayout = () => {
  const [isSidebaropen, setIsSidebarOpen] = useState(false);

  return (
    <section className="flex border-t-4">
      <Sidebar
        isSidebaropen={isSidebaropen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <section className="flex flex-col flex-grow w-screen md:w-full min-h-screen ">
        <MobileSidebar
          isSidebaropen={isSidebaropen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </section>
    </section>
  );
};

export default SidebarLayout;
