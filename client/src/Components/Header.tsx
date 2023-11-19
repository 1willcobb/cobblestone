import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex bg-midTan w-full justify-between p-5">
      <div className="flex gap-2">
        <Link to="/" className="text-lightTan hover:text-tan">
          Home
        </Link>
        <Link to="/about" className="text-lightTan hover:text-tan">
          Photography
        </Link>
        <Link to="/about" className="text-lightTan  hover:text-tan">
          Videography
        </Link>
        <Link to="/investment" className="text-lightTan  hover:text-tan">
          Investment
        </Link>
        <Link to="/journal" className="text-lightTan  hover:text-tan">
          Journal
        </Link>
        <Link to="/about" className="text-lightTan  hover:text-tan">
          About Us
        </Link>
        <Link to="/contact" className="text-lightTan  hover:text-tan">
          Contact Us
        </Link>
      </div>
      <div className="flex">
        <Link to="/">
          <h1 className="font-gopher hover:opacity-50">COBBLESTONE</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
