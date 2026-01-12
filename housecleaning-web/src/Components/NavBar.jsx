import { useState } from "react";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-container mx-auto flex items-center justify-between px-4 py-4">
        <h1 className="text-2xl font-bold text-primary">
          House Cleaning Solution
        </h1>

        <ul className="hidden md:flex gap-8 text-textDark font-medium">
          <li className="cursor-pointer hover:text-primary">Home</li>
          <li className="cursor-pointer hover:text-primary">Services</li>
          <li className="cursor-pointer hover:text-primary">Packages</li>
          <li className="cursor-pointer hover:text-primary">Contact</li>
        </ul>

        <button className="hidden md:block bg-primary text-white px-6 py-2 rounded-md">
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
