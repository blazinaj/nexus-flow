import React from 'react';
import { Clipboard, Plus } from 'lucide-react';

const WorkPlans: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Work Plans</h1>
        <button className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          <Plus size={18} />
          <span>Create Work Plan</span>
        </button>
      </div>
      
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="rounded-full bg-purple-100 p-3">
            <Clipboard className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">Work Plans</h3>
          <p className="mt-1 max-w-md text-base text-gray-500">
            Work Plans offer an app-like experience with instructions, images, checklists, sketches, and even triggered workflows.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Create your first Work Plan to get started.
          </p>
          <div className="mt-6">
            <button className="inline-flex items-center gap-1 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">
              <Plus size={16} />
              <span>Create Work Plan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPlans;