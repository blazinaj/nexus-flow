import React from 'react';
import { Workflow, Plus } from 'lucide-react';

const Workflows: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Workflows</h1>
        <button className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          <Plus size={18} />
          <span>Create Workflow</span>
        </button>
      </div>
      
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="rounded-full bg-indigo-100 p-3">
            <Workflow className="h-8 w-8 text-indigo-600" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">Workflows</h3>
          <p className="mt-1 max-w-md text-base text-gray-500">
            Create powerful, no-code automation flows that seamlessly integrate human tasks, physical components, and data processes.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Create your first Workflow to get started.
          </p>
          <div className="mt-6">
            <button className="inline-flex items-center gap-1 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">
              <Plus size={16} />
              <span>Create Workflow</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflows;