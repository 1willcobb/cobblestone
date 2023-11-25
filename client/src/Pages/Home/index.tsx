import AboutUsMini from "./AboutUsMini";
import ComboHighlight from "./ComboHighlight";
import CompanyVision from "./CompanyVision";
import Testamonial from "./Testamonial";
import ThreeMiniGal from "./ThreeMiniGal";
import VideoHighlight from "./VideoHighlight";
import CallToAction from "./CallToAction";

const Home = () => {
  return (
    <div>
      <div className="bg-none h-20">
        <CompanyVision />
      </div>

      <div className="bg-tan h-20">
        <AboutUsMini />
      </div>

      <ComboHighlight />

      <div className="bg-tan h-20">
        <Testamonial />
      </div>

      <VideoHighlight />

      <div className="bg-tan h-20">
        <CallToAction />
      </div>

      <ThreeMiniGal />

    </div>
  );
};

export default Home;
