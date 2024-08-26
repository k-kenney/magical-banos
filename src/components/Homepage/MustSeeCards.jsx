import heroImage from "../../assets/banos-hero.jpg";
import { HiChevronRight } from "react-icons/hi"; // Importing an arrow icon

const MustSeeCards = () => {

  return (
    <div className="m-auto p-auto py-40">
        <h2 className="pb-14 text-5xl font-title text-darkBlue leading-[3rem]">
          Must-See Attractions
        </h2>
    <div className="flex flex-wrap w-[80%] p-auto m-auto">
      {/* First Row - Two Cards (2/3 and 1/3 widths) */}
      <div className="w-2/3 p-2">
        <div
          className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
        >
          <img
            className="w-full h-72 object-cover rounded-t-lg"
            src={heroImage}
            alt="Hero"
          />
          <button className="absolute bottom-4 left-4 p-2 px-3.5 bg-lightTan bg-opacity-80 text-white rounded-full">
            <h4>Animal Park</h4>
          </button>
        </div>
      </div>
      <div className="w-1/3 p-2">
        <div
          className="relative bg-lightTan rounded-lg overflow-hidden shadow-lg cursor-pointer"
        >
          <img
            className="w-full h-72 object-cover rounded-t-lg"
            src={heroImage}
            alt="Hero"
          />
          <button className="absolute bottom-4 left-4 p-2 px-3.5 bg-lightTan bg-opacity-80 text-white rounded-full">
            <h4>Pailon del Diablo</h4>
          </button>
        </div>
      </div>

      {/* second row */}
    
      <div className="w-1/3 p-2">
        <div
          className="relative bg-lightTan rounded-lg overflow-hidden shadow-lg cursor-pointer"
        >
          <img
            className="w-full h-72 object-cover rounded-t-lg"
            src={heroImage}
            alt="Hero"
          />
          <button className="absolute bottom-4 left-4 p-2 px-3.5 bg-lightTan bg-opacity-80 text-white rounded-full">
            <h4>Puyo</h4>
          </button>
        </div>
      </div>

      <div className="w-2/3 p-2">
        <div
          className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
        >
          <img
            className="w-full h-72 object-cover rounded-t-lg"
            src={heroImage}
            alt="Hero"
          />
          <button className="absolute bottom-4 left-4 p-2 px-3.5 bg-lightTan bg-opacity-80 text-white rounded-full">
            <h4>Termales de la Virgen</h4>
          </button>
        </div>
      </div>

      
    </div>
    </div>
  );
};

export default MustSeeCards;
