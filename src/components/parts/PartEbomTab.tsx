import React from 'react';
import { Plus, Upload, Download, Search, ChevronDown } from 'lucide-react';
import { Part } from '../../types/Part';
import { mockEbomItems } from '../../data/mockData';

interface PartEbomTabProps {
  part: Part;
}

const PartEbomTab: React.FC<PartEbomTabProps> = ({ part }) => {
  return (
    <div className="rounded-lg border bg-white shadow-sm">
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h3 className="text-lg font-medium text-gray-900">Engineering Bill of Materials</h3>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-gray-700">Revision:</span>
              <button className="flex items-center gap-1 rounded border border-gray-300 px-2 py-1 text-gray-700 hover:bg-gray-50">
                A <ChevronDown size={14} />
              </button>
            </div>
            
            <button className="flex items-center gap-1 rounded-md bg-white px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 border border-blue-200">
              <Plus size={16} />
              <span className="hidden sm:inline">Add Lines</span>
            </button>
            
            <div className="relative">
              <button className="flex items-center gap-1 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700">
                <Upload size={16} />
                <span className="hidden sm:inline">Import</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <div className="flex justify-between items-center p-4">
          <div className="relative max-w-xs">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search size={16} className="text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Search parts..."
              className="w-full rounded-md border border-gray-300 py-1.5 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-1 rounded-md bg-white px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 border border-blue-200">
            <Download size={16} />
            <span>Export</span>
          </button>
        </div>
        
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Picture
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Part Number
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Revision
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Qty Required
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Qty Available
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Source
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {mockEbomItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="h-10 w-10 overflow-hidden rounded-md bg-gray-100">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-400">
                        <span className="text-lg">P</span>
                      </div>
                    )}
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  {item.partNumber}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {item.name}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {item.revision}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {item.qtyRequired}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  <span className={item.qtyAvailable < item.qtyRequired ? 'text-red-600 font-medium' : 'text-green-600 font-medium'}>
                    {item.qtyAvailable}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                    {item.source}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                  <button className="text-red-600 hover:text-red-900">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {mockEbomItems.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <svg
            className="h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No items in eBOM</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by adding parts to this eBOM.</p>
          <div className="mt-6 flex gap-3">
            <button className="flex items-center gap-1 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">
              <Plus size={16} />
              <span>Add Lines</span>
            </button>
            <button className="flex items-center gap-1 rounded-md bg-white px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 border border-blue-200">
              <Upload size={16} />
              <span>Import from Excel</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartEbomTab;