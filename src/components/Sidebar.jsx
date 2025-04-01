// Sidebar.jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, LayoutDashboard, UserCircle,Code, User, MessageSquare, FolderKanban, Settings } from 'lucide-react';
import ProfilePic from '../assets/mw.jpg';

const Sidebar = ({ setCurrentPage }) => {
  const [expanded, setExpanded] = useState(true);
  
  const toggleSidebar = () => {
    setExpanded(!expanded);
  };
  
  const menuItems = [
    { id: 1, icon: <LayoutDashboard />, text: "Dashboard", pageId: "dashboard" },
    { id: 2, icon: <UserCircle />, text: "Profile", pageId: "profile" },
    { id: 6, icon: <Code />, text: "Skills", pageId: "skills" },
    { id: 5, icon: <User />, text: "About me", pageId: "aboutme" },
    { id: 7, icon: <MessageSquare />, text: "Contact", pageId: "contact" },
    { id: 4, icon: <FolderKanban />, text: "Project", pageId: "project" },
    { id: 3, icon: <Settings />, text: "Settings", pageId: "settings" },
  ];

  return (
    <aside className="h-screen">
      <nav className={`h-full flex flex-col bg-[#121212] border-r border-[#444444] shadow-md transition-all duration-300 ${expanded ? 'w-64' : 'w-16'}`}>
        <div className="p-4 flex justify-between items-center">
          {expanded && <span className="text-xl font-semibold text-[#E0E0E0]">Menu</span>}
          <button 
            onClick={toggleSidebar}
            className={`p-2 rounded-lg bg-[#444444] hover:bg-[#888888] ${!expanded && 'mx-auto'}`}
          >
            {expanded ? <ChevronLeft color="#E0E0E0" /> : <ChevronRight color="#E0E0E0" />}
          </button>
        </div>
        
        <div className="flex-1 px-3 py-2">
          <ul className="flex flex-col gap-2">
            {menuItems.map(item => (
              <li key={item.id}>
                <button 
                  onClick={() => setCurrentPage(item.pageId)}
                  className="flex items-center w-full p-3 rounded-lg hover:bg-[#444444] transition-colors text-left"
                >
                  <span className="text-[#B0B0B0]">{item.icon}</span>
                  {expanded && <span className="ml-3 text-[#E0E0E0]">{item.text}</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="border-t border-[#444444] p-4">
          <div className={`flex ${expanded ? 'justify-between' : 'justify-center'} items-center`}>
            <div className={`flex items-center ${!expanded && 'hidden'}`}>
              <img 
                src={ProfilePic} 
                alt="Profile" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="ml-3">
                <div className="font-medium text-[#E0E0E0]">Enzo P. Daniela</div>
                <div className="text-xs text-[#B0B0B0]">Creator</div>
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