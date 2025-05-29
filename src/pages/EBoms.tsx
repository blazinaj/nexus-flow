import React from 'react';
import { Layers } from 'lucide-react';

const EBoms: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Engineering BOMs</h1>
      </div>
      
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="rounded-full bg-blue-100 p-3">
            <Layers className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">Engineering BOMs</h3>
          <p className="mt-1 max-w-md text-base text-gray-500">
            View and manage Engineering Bills of Materials (eBOMs) for your parts. This page will display a list of all eBOMs in the system.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            To work with eBOMs, please select a specific part from the Parts Library.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EBoms;