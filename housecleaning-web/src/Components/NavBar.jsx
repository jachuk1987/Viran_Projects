import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <h1 className="logo">House Cleaning Solution</h1>

        <ul className="nav-links">
          <li>Home</li>
          <li>Services</li>
          <li>Packages</li>
          <li>Contact</li>
        </ul>

        <button className="btn-primary">Book Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
