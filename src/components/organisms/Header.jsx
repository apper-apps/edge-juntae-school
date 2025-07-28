import React from "react";
import UserRoleBadge from "@/components/molecules/UserRoleBadge";

const Header = () => {
  return (
    <header className="bg-surface border-b border-gray-200 shadow-sm">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent korean-text">
              준태스쿨
            </h1>
            <span className="text-sm text-gray-500 korean-text">
              글쓰기로 수익 창출하기
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <UserRoleBadge role="free" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;