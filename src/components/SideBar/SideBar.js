import React, { useState } from 'react';

const Sidebar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navMenu = [
    {
      displayName: "Weather App",
      link: "/weather",
    },
    {
      displayName: "News App",
      link: "/news",
    },
    {
      displayName: "Task Manager App",
      link: "/task-manager",
    },
  ];

  return (
    <div className="flex">
      <div
        className={`fixed top-0 left-0 p-5 cursor-pointer`}
        onClick={toggleMenu}
      >
        <span className="text-3xl text-white">☰</span>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen w-screen bg-black text-white p-4 transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button className="text-white text-sm mb-4" onClick={closeMenu}>
          <span className="text-3xl">X</span>
        </button>
        {navMenu.map((elem, index) => (
          <div
            className="mb-3 bg-[#202123] p-3 rounded-lg transition-transform duration-300 transform hover:scale-105"
            key={index}
          >
            {elem?.displayName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
