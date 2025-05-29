import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      </div>
      
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="rounded-full bg-gray-100 p-3">
            <SettingsIcon className="h-8 w-8 text-gray-600" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">Application Settings</h3>
          <p className="mt-1 max-w-md text-base text-gray-500">
            Configure your organization's settings, categories, fields, and permissions.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            This feature is coming soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;