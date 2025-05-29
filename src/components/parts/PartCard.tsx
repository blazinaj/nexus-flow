import React from 'react';
import { Tag, Layers } from 'lucide-react';
import { Part } from '../../types/Part';

interface PartCardProps {
  part: Part;
}

const PartCard: React.FC<PartCardProps> = ({ part }) => {
  return (
    <div className="group h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      <div className="aspect-square bg-gray-100 relative">
        {part.image ? (
          <img 
            src={part.image} 
            alt={part.name} 
            className="h-full w-full object-cover" 
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-400">
            <span className="text-6xl">P</span>
          </div>
        )}
        <div className="absolute top-2 right-2 rounded-full bg-white px-2 py-1 text-xs font-medium text-gray-700 shadow-sm">
          {part.trackingType}
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-1 flex items-center justify-between">
          <p className="text-xs font-medium text-gray-500">{part.id}</p>
          <div className="flex items-center gap-1">
            <Tag size={14} className="text-gray-400" />
            <span className="text-xs text-gray-500">{part.category}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{part.name}</h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{part.description}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm font-medium text-blue-600">{part.partNumber}</p>
          {part.isAssembly && (
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Layers size={14} />
              <span>Assembly</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartCard;