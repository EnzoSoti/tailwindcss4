// Sidebar.jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Home, Settings, User, HelpCircle } from 'lucide-react';
import ProfilePic from '../assets/mw.jpg';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  
  const toggleSidebar = () => {
    setExpanded(!expanded);
  };
  
  const menuItems = [
    { id: 1, icon: <Home />, text: "Dashboard", path: "/" },
    { id: 2, icon: <User />, text: "Profile", path: "/profile" },
    { id: 3, icon: <Settings />, text: "Settings", path: "/settings" },
    { id: 4, icon: <HelpCircle />, text: "Help", path: "/help" }
  ];

  return (
    <aside className="h-screen">
      <nav className={`h-full flex flex-col bg-white border-r shadow-sm transition-all duration-300 ${expanded ? 'w-64' : 'w-16'}`}>
        <div className="p-4 flex justify-between items-center">
          {expanded && <span className="text-xl font-semibold">Menu</span>}
          <button 
            onClick={toggleSidebar}
            className={`p-2 rounded-lg bg-gray-100 hover:bg-gray-200 ${!expanded && 'mx-auto'}`}
          >
            {expanded ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>
        
        <div className="flex-1 px-3 py-2">
          <ul className="flex flex-col gap-2">
            {menuItems.map(item => (
              <li key={item.id}>
                <a 
                  href={item.path} 
                  className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-gray-500">{item.icon}</span>
                  {expanded && <span className="ml-3">{item.text}</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="border-t p-4">
          <div className={`flex ${expanded ? 'justify-between' : 'justify-center'} items-center`}>
            <div className={`flex items-center ${!expanded && 'hidden'}`}>
              <img 
                src={ProfilePic} 
                alt="Profile" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="ml-3">
                <div className="font-medium">Enzo Daniela</div>
                <div className="text-xs text-gray-500">Creator</div>
              </div>
            </div>
            {!expanded && (
              <img 
                src={ProfilePic} 
                alt="Profile" 
                className="w-10 h-10 rounded-full object-cover"
              />
            )}
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;