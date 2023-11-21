import { Link } from "react-router-dom";
import featuredSquare from "../static/images/weddingStandardFeaturedSquare.png";
import weddingStandard from "../static/images/weddingStandardMemberBadge.png";

const Footer = () => {
  return (
    <div className="flex bg-midTan w-full justify-center p-5 mt-auto">
      <Link to="https://www.theweddingstandard.com/blog/ben-and-jane/">
        <img
          src={featuredSquare}
          alt="wedding standard featured icon featuring cobblestone productions"
          className="sm:w-64 w-20"
        />
      </Link>
      <Link to="https://www.theweddingstandard.com/">
        <img
          src={weddingStandard}
          alt="wedding standard featured icon featuring cobblestone productions"
          className="sm:w-64 w-20"
        />
      </Link>
    </div>
  );
};

export default Footer;
