import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/organisms/Header";
import Sidebar from "@/components/organisms/Sidebar";

const Layout = () => {
  const [activeSection, setActiveSection] = useState("free-library");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <Sidebar 
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        
        <main className="flex-1 lg:ml-0">
          <div className="p-6 lg:p-8">
            <Outlet context={{ activeSection }} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;