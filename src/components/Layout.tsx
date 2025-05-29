import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useAppContext } from '../context/AppContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { sidebarOpen } = useAppContext();

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
        <Navbar />
        <main className="flex-1 overflow-auto p-4 md:p-6">
          {children}
        </main>
        <footer className="border-t bg-white p-4 text-center text-sm text-gray-500">
          © 2025 Nexus Flow. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Layout;