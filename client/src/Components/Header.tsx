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

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;

      if (width < 600) {
        setScreenSize("small");
      } else if (width < 800) {
        setScreenSize("medium");
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

  return (
    <div className="flex bg-midTan w-full justify-between p-5">
      {screenSize === "small" ? (
        <div>hey</div>
      ) : screenSize === "medium" ? (
        <div>medium</div>
      ) : (
        <div className="flex gap-2">
          {Links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-lightTan drop-shadow-2xl hover:text-tan whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      <div className="flex">
        {}
        <Link to="/">
          <img
            src={lettering}
            alt="cobblestone logo in lettering format"
            className="w-20"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
