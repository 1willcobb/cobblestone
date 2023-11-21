import { Link } from "react-router-dom";

const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Photography",
    path: "/photography",
  },
  {
    name: "Videography",
    path: "/videography",
  },
  {
    name: "Investment",
    path: "/investment",
  },
  {
    name: "Journal",
    path: "/journal",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  return (
    <div className="flex bg-midTan w-full justify-between p-5">
      <div className="flex gap-2">
        {Links.map((link) => (
          <Link
            to={link.path}
            className="text-lightTan drop-shadow-2xl hover:text-tan"
          >
            {link.name}
          </Link>
        ))}
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
