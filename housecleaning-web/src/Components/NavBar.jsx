import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow">
      <h1 className="text-2xl font-bold text-blue-600">
        House Cleaning Solution
      </h1>

      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <ul
        className={`md:flex gap-6 ${
          open ? "block" : "hidden"
        } md:block`}
      >
        <li>Home</li>
        <li>Services</li>
        <li>Packages</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
