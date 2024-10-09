import React from 'react';
import { BarChart, MapPin, Package, Truck } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={<Truck />} title="Active Trucks" value="150" />
        <StatCard icon={<Package />} title="Open Loads" value="75" />
        <StatCard icon={<MapPin />} title="Completed Deliveries" value="1,234" />
        <StatCard icon={<BarChart />} title="Revenue (30d)" value="$523,487" />
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        {/* Add a table or list of recent activities here */}
        <p>Activity list coming soon...</p>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ icon: React.ReactNode; title: string; value: string }> = ({ icon, title, value }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex items-center">
      <div className="text-blue-600 mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default Dashboard;