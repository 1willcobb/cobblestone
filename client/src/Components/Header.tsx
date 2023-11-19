import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex bg-gray-400 w-full">
      <h1>Header</h1>
      <Link to="/">Home</Link>
      <Link to="/about">Photography</Link>
      <Link to="/about">Videography</Link>
      <Link to="/investment">Investment</Link>
      <Link to="/journal">Journal</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
  );
};

export default Header;
