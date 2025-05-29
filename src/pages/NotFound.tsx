import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center py-16 text-center">
      <h1 className="text-9xl font-bold text-gray-200">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-gray-900">Page not found</h2>
      <p className="mt-2 text-gray-600">Sorry, we couldn't find the page you're looking for.</p>
      <Link
        to="/"
        className="mt-8 flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        <Home size={18} />
        <span>Go to Home</span>
      </Link>
    </div>
  );
};

export default NotFound;