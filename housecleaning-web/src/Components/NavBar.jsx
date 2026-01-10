const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <h1 className="text-xl font-bold text-blue-600">HomeCare</h1>
      <ul className="flex gap-6">
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
