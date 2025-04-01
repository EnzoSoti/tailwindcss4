// App.jsx
import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Help from './pages/Help';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  // Function to render the appropriate component based on currentPage
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Settings />;
      case 'help':
        return <Help />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex">
      <Sidebar setCurrentPage={setCurrentPage} />
      <main className="flex-1 p-6">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;