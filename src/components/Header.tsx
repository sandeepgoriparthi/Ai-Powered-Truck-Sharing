import React from 'react';
import { Link } from 'react-router-dom';
import { Truck } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Truck size={32} />
          <span className="text-xl font-bold">TruckShare AI</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link></li>
            <li><Link to="/load-matching" className="hover:text-blue-200">Load Matching</Link></li>
            <li><Link to="/route-optimization" className="hover:text-blue-200">Route Optimization</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;