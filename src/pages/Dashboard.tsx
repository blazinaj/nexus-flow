import React from 'react';
import { 
  Package, 
  Box, 
  AlertTriangle, 
  Clock, 
  Clipboard, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import StatCard from '../components/dashboard/StatCard';
import RecentActivityCard from '../components/dashboard/RecentActivityCard';
import InventoryStatusChart from '../components/dashboard/InventoryStatusChart';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">Last updated: Today at 10:45 AM</div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Parts" 
          value="1,452" 
          change="+12.5%" 
          icon={<Package size={20} />} 
          trend="up" 
        />
        <StatCard 
          title="Inventory Items" 
          value="8,932" 
          change="+5.2%" 
          icon={<Box size={20} />} 
          trend="up" 
        />
        <StatCard 
          title="Low Stock" 
          value="24" 
          change="-8.1%" 
          icon={<AlertTriangle size={20} />} 
          trend="down" 
        />
        <StatCard 
          title="Pending Workflows" 
          value="37" 
          change="+2.3%" 
          icon={<Clock size={20} />} 
          trend="up" 
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Inventory Status</h2>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
                View All
              </button>
            </div>
            <InventoryStatusChart />
          </div>
        </div>

        <div>
          <div className="rounded-lg border bg-white p-6 shadow-sm h-full">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Active Work Plans</h2>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-md border border-gray-200 p-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                      <Clipboard size={16} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Engine Assembly WP-{item}42</h3>
                      <p className="text-sm text-gray-500">12 steps • 3 completed</p>
                    </div>
                  </div>
                  <button className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                    <ArrowRight size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-800">View All</button>
        </div>
        <div className="space-y-4">
          <RecentActivityCard 
            title="Part P-1234 updated" 
            description="Revision B added to Turbine Housing" 
            time="2 hours ago" 
            user="Alex Johnson" 
            icon={<Package size={16} />} 
            iconColor="text-green-600 bg-green-100"
          />
          <RecentActivityCard 
            title="New inventory received" 
            description="25 units of Control Board CB-789 added" 
            time="Yesterday" 
            user="Maria Garcia" 
            icon={<Box size={16} />} 
            iconColor="text-blue-600 bg-blue-100"
          />
          <RecentActivityCard 
            title="Work plan completed" 
            description="Assembly process WP-567 marked as finished" 
            time="Yesterday" 
            user="Thomas Wright" 
            icon={<Clipboard size={16} />} 
            iconColor="text-purple-600 bg-purple-100"
          />
          <RecentActivityCard 
            title="New part created" 
            description="Manifold Assembly P-4565 added to library" 
            time="2 days ago" 
            user="Sarah Chen" 
            icon={<TrendingUp size={16} />}
            iconColor="text-orange-600 bg-orange-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;