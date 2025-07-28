import React from "react";
import SidebarItem from "@/components/molecules/SidebarItem";

const Sidebar = ({ activeSection, onSectionChange }) => {
  const sections = [
    {
      id: "free-library",
      name: "무료 라이브러리",
      icon: "BookOpen",
      requiresRole: "free"
    },
    {
      id: "membership-hub", 
      name: "멤버십 허브",
      icon: "Users",
      requiresRole: "member",
      disabled: true
    },
    {
      id: "master-program",
      name: "마스터 프로그램", 
      icon: "Crown",
      requiresRole: "master",
      disabled: true
    }
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-60 bg-surface border-r border-gray-200 shadow-sm">
        <div className="p-6">
          <nav className="space-y-2">
            {sections.map((section) => (
              <SidebarItem
                key={section.id}
                icon={section.icon}
                label={section.name}
                isActive={activeSection === section.id}
                disabled={section.disabled}
                onClick={() => !section.disabled && onSectionChange(section.id)}
              />
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <div className="bg-surface border-b border-gray-200 p-4">
          <div className="flex space-x-2 overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => !section.disabled && onSectionChange(section.id)}
                disabled={section.disabled}
                className={`
                  flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                  ${activeSection === section.id
                    ? "bg-gradient-to-r from-primary/10 to-secondary/10 text-primary"
                    : "text-gray-600 hover:text-primary hover:bg-gray-50"
                  }
                  ${section.disabled ? "opacity-50 cursor-not-allowed" : ""}
                `}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;