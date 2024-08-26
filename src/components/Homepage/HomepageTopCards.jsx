import heroImage from "../../assets/banos-hero.jpg";
import { HiChevronRight } from "react-icons/hi"; // Importing an arrow icon

const HomepageTopCards = () => {
  const handleCardClick = (cardId) => {
    // Handle card click here, e.g., navigate to a different page
    console.log(`Card ${cardId} clicked`);
  };

  return (
    <div className="flex flex-wrap w-[80%] p-auto m-auto">
      {/* First Row - Two Cards (2/3 and 1/3 widths) */}
      <div className="w-2/3 p-2">
        <div
          className="relative bg-darkBlue rounded-lg overflow-hidden shadow-lg cursor-pointer"
          onClick={() => handleCardClick(1)}
        >
          <img
            className="w-full h-64 object-cover rounded-t-lg"
            src={heroImage}
            alt="Hero"
          />
          <div className="p-4">
            <h2 className="text-lightBeige text-xl">Thermal Baths & Spas</h2>
          </div>
          <button className="absolute top-2 right-2 p-2 bg-gray-800 text-white rounded-full">
            <HiChevronRight className="w-7 h-7 pl-0.5" />
          </button>
        </div>
      </div>

      <div className="w-1/3 p-2">
        <div
          className="relative bg-lightTan rounded-lg overflow-hidden shadow-lg cursor-pointer"
          onClick={() => handleCardClick(2)}
        >
          <img
            className="w-full h-64 object-cover rounded-t-lg"
            src={heroImage}
            alt="Hero"
          />
          <div className="p-4">
            <h2 className="text-lightBeige text-xl">Day Trips</h2>
          </div>
          <button className="absolute top-2 right-2 p-2 bg-gray-800 text-white rounded-full">
            <HiChevronRight className="w-7 h-7 pl-0.5" />
          </button>
        </div>
      </div>

      {/* Second Row - Three Cards (1/3 width each) */}
      <div className="w-1/3 p-2">
        <div
          className="relative bg-lightBlue rounded-lg overflow-hidden shadow-lg cursor-pointer"
          onClick={() => handleCardClick(3)}
        >
          <img
            className="w-full h-64 object-cover rounded-t-lg"
            src={heroImage}
            alt="Hero"
          />
          <div className="p-4">
            <h2 className="text-lightBeige text-xl">Restaurants & Cafes</h2>
          </div>
          <button className="absolute top-2 right-2 p-2 bg-gray-800 text-white rounded-full">
            <HiChevronRight className="w-7 h-7 pl-0.5" />
          </button>
        </div>
      </div>

      <div className="w-1/3 p-2">
        <div
          className="relative bg-darkTan rounded-lg overflow-hidden shadow-lg cursor-pointer"
          onClick={() => handleCardClick(4)}
        >
          <img
            className="w-full h-64 object-cover rounded-t-lg"
            src={heroImage}
            alt="Hero"
          />
          <div className="p-4">
            <h2 className="text-lightBeige text-xl">Incredible Hikes</h2>
          </div>
          <button className="absolute top-2 right-2 p-2 bg-gray-800 text-white rounded-full">
            <HiChevronRight className="w-7 h-7 pl-0.5" />
          </button>
        </div>
      </div>

      <div className="w-1/3 p-2">
        <div
          className="relative bg-darkBlue rounded-lg overflow-hidden shadow-lg cursor-pointer"
          onClick={() => handleCardClick(5)}
        >
          <img
            className="w-full h-64 object-cover rounded-t-lg"
            src={heroImage}
            alt="Hero"
          />
          <div className="p-4">
            <h2 className="text-lightBeige text-xl">Amazing Attractions</h2>
          </div>
          <button className="absolute top-2 right-2 p-2 bg-gray-800 text-white rounded-full">
            <HiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomepageTopCards;
