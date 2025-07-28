import React from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const SidebarItem = ({ icon, label, isActive, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-all duration-200",
        "hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5",
        "focus:outline-none focus:ring-2 focus:ring-primary/20",
        isActive 
          ? "bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-l-4 border-primary shadow-sm" 
          : "text-gray-600 hover:text-primary",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <ApperIcon 
        name={icon} 
        size={20} 
        className={cn(
          "transition-colors duration-200",
          isActive ? "text-primary" : "text-gray-500"
        )}
      />
      <span className="font-medium korean-text">{label}</span>
    </button>
  );
};

export default SidebarItem;