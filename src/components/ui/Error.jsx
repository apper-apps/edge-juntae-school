import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Error = ({ message = "오류가 발생했습니다", onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 animate-fadeIn">
      <div className="w-16 h-16 bg-gradient-to-r from-red-100 to-red-200 rounded-full flex items-center justify-center mb-6">
        <ApperIcon name="AlertCircle" size={32} className="text-red-500" />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 korean-text mb-2">
        문제가 발생했습니다
      </h3>
      
      <p className="text-gray-600 korean-text text-center mb-6 max-w-md">
        {message}
      </p>
      
      {onRetry && (
        <Button onClick={onRetry} variant="primary">
          <ApperIcon name="RefreshCcw" size={16} className="mr-2" />
          다시 시도
        </Button>
      )}
    </div>
  );
};

export default Error;