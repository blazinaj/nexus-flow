import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Package, 
  Layers, 
  Clipboard, 
  BarChart2, 
  Settings, 
  Box, 
  Users, 
  Workflow,
  ChevronRight
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Sidebar: React.FC = () => {
  const { sidebarOpen } = useAppContext();

  const navItems = [
    { icon: <Package size={20} />, label: 'Parts Library', path: '/parts' },
    { icon: <Box size={20} />, label: 'Inventory', path: '/inventory' },
    { icon: <Layers size={20} />, label: 'Engineering BOMs', path: '/eboms' },
    { icon: <Workflow size={20} />, label: 'Work Plans', path: '/work-plans' },
    { icon: <Clipboard size={20} />, label: 'Workflows', path: '/workflows' },
    { icon: <BarChart2 size={20} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <Users size={20} />, label: 'Teams', path: '/teams' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside 
      className={`fixed inset-y-0 left-0 z-20 flex flex-col bg-blue-900 text-white transition-all duration-300 ${
        sidebarOpen ? 'w-64' : 'w-20'
      }`}
    >
      <div className="flex h-16 items-center justify-center border-b border-blue-800">
        {sidebarOpen ? (
          <h1 className="text-xl font-bold">Nexus Flow</h1>
        ) : (
          <h1 className="text-xl font-bold">NF</h1>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center gap-3 rounded-md px-3 py-2 transition-colors ${
                    isActive 
                      ? 'bg-blue-800 text-white' 
                      : 'text-blue-100 hover:bg-blue-800 hover:text-white'
                  } ${!sidebarOpen && 'justify-center'}`
                }
              >
                <span>{item.icon}</span>
                {sidebarOpen && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
                {sidebarOpen && (
                  <ChevronRight size={16} className="ml-auto" />
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;