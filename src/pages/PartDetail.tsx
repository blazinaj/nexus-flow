import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Edit, Printer, MoreVertical, ArrowLeft, Package, Clipboard, Activity, Layers, Box } from 'lucide-react';
import { mockParts } from '../data/mockData';
import PartInfoTab from '../components/parts/PartInfoTab';
import PartEbomTab from '../components/parts/PartEbomTab';
import PartInventoryTab from '../components/parts/PartInventoryTab';
import PartActivityTab from '../components/parts/PartActivityTab';

const PartDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const part = mockParts.find(p => p.id === id);
  const [activeTab, setActiveTab] = useState('info');
  
  if (!part) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <h2 className="text-lg font-medium text-gray-900">Part not found</h2>
          <p className="mt-2 text-sm text-gray-500">The part you're looking for doesn't exist or was removed.</p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'info', label: 'Information', icon: <Package size={18} /> },
    { id: 'ebom', label: 'eBOM', icon: <Layers size={18} /> },
    { id: 'inventory', label: 'Inventory', icon: <Box size={18} /> },
    { id: 'workflow', label: 'Workflow', icon: <Clipboard size={18} /> },
    { id: 'activity', label: 'Activity', icon: <Activity size={18} /> },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button 
          className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
          onClick={() => window.history.back()}
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">{part.name}</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Part header */}
        <div className="col-span-full rounded-lg border bg-white p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="h-36 w-36 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
              {part.image ? (
                <img src={part.image} alt={part.name} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-400">
                  <span className="text-6xl">P</span>
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <div className="mb-1 flex items-center gap-2">
                <span className="text-sm font-medium text-gray-500">{part.id}</span>
                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                  {part.category}
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">{part.name}</h2>
              <p className="mt-1 text-gray-600">{part.description}</p>
              
              <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Part Number</p>
                  <p className="text-gray-900">{part.partNumber}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Tracking Type</p>
                  <p className="text-gray-900">{part.trackingType}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Revision</p>
                  <p className="text-gray-900">{part.revision || 'A'}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Unit</p>
                  <p className="text-gray-900">{part.unit || 'Each'}</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-shrink-0 items-center gap-2 self-start md:self-auto">
              <button className="rounded-md border border-gray-300 p-2 text-gray-500 hover:bg-gray-50">
                <Edit size={18} />
              </button>
              <button className="rounded-md border border-gray-300 p-2 text-gray-500 hover:bg-gray-50">
                <Printer size={18} />
              </button>
              <button className="rounded-md border border-gray-300 p-2 text-gray-500 hover:bg-gray-50">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="col-span-full">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab content */}
        <div className="col-span-full">
          {activeTab === 'info' && <PartInfoTab part={part} />}
          {activeTab === 'ebom' && <PartEbomTab part={part} />}
          {activeTab === 'inventory' && <PartInventoryTab part={part} />}
          {activeTab === 'activity' && <PartActivityTab part={part} />}
          {activeTab === 'workflow' && (
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">Workflows</h3>
              <p className="mt-2 text-gray-500">No workflows found for this part.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartDetail;