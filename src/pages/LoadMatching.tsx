import React, { useState } from 'react';
import { Search } from 'lucide-react';

const LoadMatching: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchTerm);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Load Matching</h1>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex">
          <input
            type="text"
            placeholder="Search for loads..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Search size={20} />
          </button>
        </div>
      </form>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Available Loads</h2>
        {/* Add a list or grid of available loads here */}
        <p>Load list coming soon...</p>
      </div>
    </div>
  );
};

export default LoadMatching;