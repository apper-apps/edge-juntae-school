import React, { useState } from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";
import Card from "@/components/atoms/Card";

const AccordionItem = ({ lesson, isExpanded, onToggle }) => {
  return (
    <Card className="overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 korean-text mb-1">
            {lesson.title}
          </h3>
          <p className="text-sm text-gray-600 korean-text">
            {lesson.description}
          </p>
        </div>
<ApperIcon
          name="ChevronDown"
          size={20}
          className={cn(
            "text-gray-400 transition-transform duration-200 ml-4",
            isExpanded ? "transform rotate-180" : ""
          )}
        />
      </button>
      
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-100 animate-fadeIn">
          <div className="pt-4">
            <div 
              className="lesson-content korean-text text-gray-700"
              dangerouslySetInnerHTML={{ __html: lesson.content }}
            />
          </div>
        </div>
      )}
    </Card>
  );
};

export default AccordionItem;