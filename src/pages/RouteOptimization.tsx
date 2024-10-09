import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 40.7128,
  lng: -74.0060
};

// Replace this with your actual Google Maps API key
const GOOGLE_MAPS_API_KEY = '';

const RouteOptimization: React.FC = () => {
  const [directions, setDirections] = useState(null);

  const directionsCallback = (response: any) => {
    if (response !== null && response.status === 'OK') {
      setDirections(response);
    }
  };

  const renderMap = () => {
    if (!GOOGLE_MAPS_API_KEY) {
      return (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
          <p className="font-bold">Google Maps API Key Missing</p>
          <p>To display the map, you need to add a valid Google Maps API key. Follow these steps:</p>
          <ol className="list-decimal ml-5 mt-2">
            <li>Go to the <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Cloud Console</a></li>
            <li>Create a new project or select an existing one</li>
            <li>Enable the Maps JavaScript API for your project</li>
            <li>Create an API key with appropriate restrictions</li>
            <li>Replace the empty string in GOOGLE_MAPS_API_KEY with your new API key</li>
          </ol>
        </div>
      );
    }

    return (
      <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={4}
        >
          <DirectionsService
            options={{
              destination: 'Los Angeles, CA',
              origin: 'New York, NY',
              travelMode: 'DRIVING'
            }}
            callback={directionsCallback}
          />
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </LoadScript>
    );
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Route Optimization</h1>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Current Route</h2>
        <div className="flex items-center space-x-2 text-gray-600 mb-4">
          <MapPin size={20} />
          <span>Start: New York, NY</span>
          <span>→</span>
          <MapPin size={20} />
          <span>End: Los Angeles, CA</span>
        </div>
        {renderMap()}
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Optimization Suggestions</h2>
        <ul className="list-disc pl-5">
          <li>Consider alternative route through I-80 W for fewer tolls</li>
          <li>Estimated fuel savings: 5% by adjusting speed to 65 mph</li>
          <li>Recommended rest stops: Columbus, OH and Denver, CO</li>
        </ul>
      </div>
    </div>
  );
};

export default RouteOptimization;