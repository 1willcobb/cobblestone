import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import lettering from "../static/logos/Lettering.png";
import primary from "../static/logos/primary.png";

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
  //! Add Journal when ready {
  //   name: "Journal",
  //   path: "/journal",
  // },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Header: React.FC = () => {
  const [screenSize, setScreenSize] = useState<"small" | "medium" | "large">(
    "large"
  );

  const [burgerMenu, setBurgerMenu] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setBurgerMenu(false);

      if (width < 770) {
        setScreenSize("small");
      } else {
        setScreenSize("large");
      }
    };

    // Event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const menu = () => {
    setBurgerMenu(!burgerMenu);
  };

  return (
    <div className="flex max-w-100">
      <div className="flex bg-midTan w-full md:justify-between justify-center p-5">
        {screenSize === "small" ? (
          <div className="flex mr-auto my-auto bg-midTan">
            {burgerMenu ? (
              <button onClick={menu}>X</button>
            ) : (
              <button onClick={menu}>0</button>
            )}
          </div>
        ) : (
          <div className="flex gap-2 bg-midTan">
            {Links.map((link) => (
              <Link
                key={link.name} 
                to={link.path}
                className="text-lightTan hover:text-tan whitespace-nowrap bg-midTan"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}

        {screenSize === "small" ? (
          <div className="mr-auto bg-midTan">
            <Link to="/">
              <img
                src={primary}
                alt="cobblestone logo in lettering format"
                className="w-14 bg-midTan"
              />
            </Link>
          </div>
        ) : (
          <div className="ml-auto bg-midTan">
            <Link to="/">
              <img
                src={lettering}
                alt="cobblestone logo in lettering format"
                className="w-20 bg-midTan"
              />
            </Link>
          </div>
        )}
      </div>
      {burgerMenu && (
        <div className="flex gap-8 flex-col bg-midTan h-100">
          {Links.map((link) => (
            <Link
              key={link.name}
              onClick={menu}
              to={link.path}
              className="text-lightTan hover:text-tan whitespace-nowrap bg-midTan"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
