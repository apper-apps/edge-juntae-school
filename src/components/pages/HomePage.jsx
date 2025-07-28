import React from "react";
import { useOutletContext } from "react-router-dom";
import FreeLibrary from "@/components/organisms/FreeLibrary";
import MembershipHub from "@/components/organisms/MembershipHub";
import MasterProgram from "@/components/organisms/MasterProgram";

const HomePage = () => {
  const { activeSection } = useOutletContext();

  const renderContent = () => {
    switch (activeSection) {
      case "free-library":
        return <FreeLibrary />;
      case "membership-hub":
        return <MembershipHub />;
      case "master-program":
        return <MasterProgram />;
      default:
        return <FreeLibrary />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {renderContent()}
    </div>
  );
};

export default HomePage;