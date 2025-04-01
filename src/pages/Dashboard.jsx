import React from "react";

const Dashboard = () => {
  return (
    <div className="h-full">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-lg font-bold">Welcome to Your Dashboard</h1>
      </header>

      {/* Content Area */}
      <main className="p-6">
        <p>Dashboard content goes here...</p>
      </main>
    </div>
  );
};

export default Dashboard;