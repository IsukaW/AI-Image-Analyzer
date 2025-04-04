import { useState } from 'react';

const Header = () => {
  return (
    <header className="bg-white h-16 shadow-sm">
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            AI Assistant
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
