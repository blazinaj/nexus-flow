import React, { ReactNode } from 'react';

interface RecentActivityCardProps {
  title: string;
  description: string;
  time: string;
  user: string;
  icon: ReactNode;
  iconColor: string;
}

const RecentActivityCard: React.FC<RecentActivityCardProps> = ({
  title,
  description,
  time,
  user,
  icon,
  iconColor
}) => {
  return (
    <div className="flex items-start gap-4 rounded-md border border-gray-100 p-4 hover:bg-gray-50 transition-colors">
      <div className={`rounded-full p-2 ${iconColor}`}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
          <span>{time}</span>
          <span>•</span>
          <span>{user}</span>
        </div>
      </div>
    </div>
  );
};

export default RecentActivityCard;