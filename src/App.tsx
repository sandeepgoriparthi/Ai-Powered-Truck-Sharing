import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import LoadMatching from './pages/LoadMatching';
import RouteOptimization from './pages/RouteOptimization';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/load-matching" element={<LoadMatching />} />
            <Route path="/route-optimization" element={<RouteOptimization />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;