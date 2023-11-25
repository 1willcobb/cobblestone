import { Link } from "react-router-dom";
import featuredSquare from "../static/images/weddingStandardFeaturedSquare.png";
import weddingStandard from "../static/images/weddingStandardMemberBadge.png";

const Footer = () => {
  return (
    <div className="flex bg-midTan w-full justify-center p-5 mt-auto gap-2">
      <Link to="https://www.theweddingstandard.com/blog/ben-and-jane/">
        <img
          src={featuredSquare}
          alt="wedding standard featured icon featuring cobblestone productions"
          className="sm:w-64 w-20 bg-midTan"
        />
      </Link>
      <Link to="https://www.theweddingstandard.com/" className="bg-midTan">
        <img
          src={weddingStandard}
          alt="wedding standard featured icon featuring cobblestone productions"
          className="sm:w-64 w-20 bg-midTan"
        />
      </Link>
    </div>
  );
};

export default Footer;
