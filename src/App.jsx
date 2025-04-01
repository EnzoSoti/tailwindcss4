// App.jsx
import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Project from './pages/Project';
import Aboutme from './pages/aboutme';
import Skills from './pages/skills'
import Contact from './pages/Contact';

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
      case 'project':
        return <Project />;
      case 'aboutme':
        return <Aboutme />
      case 'skills':
        return <Skills />
      case 'contact':
        return <Contact />
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex bg-[#121212] text-[#E0E0E0] min-h-screen">
      <Sidebar setCurrentPage={setCurrentPage} />
      <main className="flex-1 p-6">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;