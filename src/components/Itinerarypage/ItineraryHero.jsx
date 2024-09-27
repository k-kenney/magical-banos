import { Link } from "react-router-dom";
import heroImage from "../../assets/banos-hero.jpg";
import { RiArrowRightSLine } from "react-icons/ri";

const ItineraryHero = () => {
  return (
    <div className="relative h-[400px] flex flex-col justify-center items-center">
      {/* Dark blue background */}
      <div className="absolute bg-darkBlue inset-0 z-0"></div>

      {/* Background image with opacity */}
      <div
        style={{ backgroundImage: `url(${heroImage})` }}
        className="absolute m-auto inset-0 bg-cover bg-center opacity-60 w-[97%] h-[90%] rounded-xl z-0"
      ></div>

      {/* Content */}
      <div className="relative z-10 p-8 pt-20 w-full h-full">
        <h1 className="absolute bottom-10 left-10 text-lightBeige text-4xl md:text-6xl lg:text-8xl font-title mb-4 ml-8">
          Itineraries
        </h1>
      </div>
    </div>
  );
};

export default ItineraryHero;
