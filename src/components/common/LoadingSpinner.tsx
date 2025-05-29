import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
    </div>
  );
};

export default LoadingSpinner;