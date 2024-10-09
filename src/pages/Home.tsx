import React from 'react';
import { Link } from 'react-router-dom';
import { TruckIcon, BarChartIcon, MapIcon } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <div className="relative h-96 mb-12">
        <img
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Truck on highway"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to TruckShare AI</h1>
          <p className="text-2xl mb-8">Optimize your freight logistics with AI-powered solutions</p>
          <Link to="/dashboard" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-xl font-semibold hover:bg-blue-700 transition duration-300">
            Get Started
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          icon={<TruckIcon size={48} />}
          title="AI-Based Matching"
          description="Connect shippers and truckers efficiently"
          image="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <FeatureCard
          icon={<BarChartIcon size={48} />}
          title="Dynamic Pricing"
          description="Get real-time, market-driven pricing"
          image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <FeatureCard
          icon={<MapIcon size={48} />}
          title="Route Optimization"
          description="Save time and fuel with smart routing"
          image="https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; image: string }> = ({ icon, title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="text-blue-600 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Home;