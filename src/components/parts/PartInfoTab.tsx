import React from 'react';
import { Plus, Edit } from 'lucide-react';
import { Part } from '../../types/Part';

interface PartInfoTabProps {
  part: Part;
}

const PartInfoTab: React.FC<PartInfoTabProps> = ({ part }) => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {/* Custom fields */}
      <div className="lg:col-span-2 rounded-lg border bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">Custom Fields</h3>
          <button className="flex items-center gap-1 rounded-md bg-white px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 border border-blue-200">
            <Plus size={16} />
            <span>Add Field Group</span>
          </button>
        </div>
        
        <div className="rounded-lg border border-gray-200">
          <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
            <h4 className="flex items-center justify-between text-sm font-medium text-gray-700">
              <span>Material Properties</span>
              <button className="rounded p-1 text-gray-500 hover:bg-gray-200">
                <Edit size={14} />
              </button>
            </h4>
          </div>
          
          <div className="p-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-gray-500">Material</label>
                <p className="mt-1 text-sm text-gray-900">Aluminum 6061</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500">Surface Treatment</label>
                <p className="mt-1 text-sm text-gray-900">Anodized</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500">Weight (kg)</label>
                <p className="mt-1 text-sm text-gray-900">0.54</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500">Color</label>
                <p className="mt-1 text-sm text-gray-900">Black</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 rounded-lg border border-gray-200">
          <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
            <h4 className="flex items-center justify-between text-sm font-medium text-gray-700">
              <span>Manufacturing Info</span>
              <button className="rounded p-1 text-gray-500 hover:bg-gray-200">
                <Edit size={14} />
              </button>
            </h4>
          </div>
          
          <div className="p-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-gray-500">Manufacturer</label>
                <p className="mt-1 text-sm text-gray-900">In-house</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500">Manufacturing Method</label>
                <p className="mt-1 text-sm text-gray-900">CNC Machining</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500">Lead Time (days)</label>
                <p className="mt-1 text-sm text-gray-900">14</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500">Tolerance</label>
                <p className="mt-1 text-sm text-gray-900">±0.005"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Attachments */}
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">Attachments</h3>
          <button className="flex items-center gap-1 rounded-md bg-white px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 border border-blue-200">
            <Plus size={16} />
            <span>Add File</span>
          </button>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-md border border-gray-200 p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-100 text-blue-600">
                PDF
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Technical Drawing</p>
                <p className="text-xs text-gray-500">Added 2 weeks ago • 1.2 MB</p>
              </div>
            </div>
            <button className="rounded-md px-2 py-1 text-xs font-medium text-blue-600 hover:bg-blue-50">
              View
            </button>
          </div>
          
          <div className="flex items-center justify-between rounded-md border border-gray-200 p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-green-100 text-green-600">
                STEP
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">3D Model</p>
                <p className="text-xs text-gray-500">Added 2 weeks ago • 4.5 MB</p>
              </div>
            </div>
            <button className="rounded-md px-2 py-1 text-xs font-medium text-blue-600 hover:bg-blue-50">
              View
            </button>
          </div>
          
          <div className="flex items-center justify-between rounded-md border border-gray-200 p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-red-100 text-red-600">
                DOCX
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Test Procedures</p>
                <p className="text-xs text-gray-500">Added 1 week ago • 320 KB</p>
              </div>
            </div>
            <button className="rounded-md px-2 py-1 text-xs font-medium text-blue-600 hover:bg-blue-50">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartInfoTab;