import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  title = "콘텐츠가 없습니다", 
  description = "아직 등록된 콘텐츠가 없습니다. 곧 업데이트될 예정입니다." 
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 animate-fadeIn">
      <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mb-6">
        <ApperIcon name="BookOpen" size={32} className="text-primary" />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 korean-text mb-2">
        {title}
      </h3>
      
      <p className="text-gray-600 korean-text text-center max-w-md">
        {description}
      </p>
    </div>
  );
};

export default Empty;