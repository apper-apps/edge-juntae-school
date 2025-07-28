import React from "react";

const Loading = () => {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-48 mb-4 shimmer"></div>
        <div className="h-4 bg-gray-200 rounded w-96 shimmer"></div>
      </div>
      
      <div className="space-y-4">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="bg-surface rounded-lg shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="h-6 bg-gray-200 rounded w-64 mb-2 shimmer"></div>
                <div className="h-4 bg-gray-200 rounded w-96 shimmer"></div>
              </div>
              <div className="w-5 h-5 bg-gray-200 rounded shimmer ml-4"></div>
            </div>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .shimmer {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;