import React from 'react';
import { Package, Box, Clipboard, User, MessageSquare, Send } from 'lucide-react';
import { Part } from '../../types/Part';
import { mockActivities } from '../../data/mockData';

interface PartActivityTabProps {
  part: Part;
}

const PartActivityTab: React.FC<PartActivityTabProps> = ({ part }) => {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'part_update':
        return <Package size={18} className="text-blue-500" />;
      case 'inventory':
        return <Box size={18} className="text-green-500" />;
      case 'workflow':
        return <Clipboard size={18} className="text-purple-500" />;
      case 'comment':
        return <MessageSquare size={18} className="text-gray-500" />;
      default:
        return <User size={18} className="text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <h3 className="text-lg font-medium text-gray-900">Activity Feed</h3>
        
        <div className="mt-6 space-y-8">
          {mockActivities.map((activity) => (
            <div key={activity.id} className="relative">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                    {getActivityIcon(activity.type)}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-gray-900">{activity.user}</p>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                  <p className="mt-1 text-gray-700">{activity.description}</p>
                  
                  {activity.details && (
                    <div className="mt-2 rounded-md bg-gray-50 p-3 text-sm text-gray-700">
                      {activity.details}
                    </div>
                  )}
                  
                  {activity.type === 'comment' && activity.comments && activity.comments.length > 0 && (
                    <div className="mt-3 space-y-3">
                      {activity.comments.map((comment, index) => (
                        <div key={index} className="flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-700">
                              {comment.user.substring(0, 2)}
                            </div>
                          </div>
                          <div className="flex-1 rounded-lg bg-gray-100 p-3">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-medium text-gray-900">{comment.user}</p>
                              <span className="text-xs text-gray-500">{comment.time}</span>
                            </div>
                            <p className="mt-1 text-sm text-gray-700">{comment.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-medium text-gray-900">Add Comment</h3>
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600">
              <User size={20} />
            </div>
          </div>
          <div className="flex-1">
            <textarea
              rows={3}
              placeholder="Add a comment..."
              className="w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            ></textarea>
            <div className="mt-2 flex justify-end">
              <button className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                <Send size={16} />
                <span>Post Comment</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartActivityTab;