import React, { useState } from 'react';
import { Search, Filter, Plus, Download, Box } from 'lucide-react';

const Inventory: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Inventory</h1>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            <Plus size={18} />
            <span>Add Inventory</span>
          </button>
        </div>
      </div>
      
      <div className="rounded-lg border bg-white shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border-b">
          <div className="relative flex-grow max-w-lg">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search size={18} className="text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Search inventory..."
              className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Filter size={18} />
              <span className="hidden sm:inline">Filter</span>
            </button>
            <button className="flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Download size={18} />
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="rounded-lg bg-blue-50 p-4 text-blue-800">
            <div className="flex">
              <div className="flex-shrink-0">
                <Box className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">Inventory Management</h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>This section will display a full inventory view across all parts. The inventory data is being prepared.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col items-center justify-center py-12 text-center">
            <svg
              className="h-16 w-16 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">Coming Soon</h3>
            <p className="mt-1 text-sm text-gray-500">The complete inventory management view is under development.</p>
            <div className="mt-6">
              <button className="inline-flex items-center gap-1 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">
                <Plus size={16} />
                <span>Add Inventory</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;