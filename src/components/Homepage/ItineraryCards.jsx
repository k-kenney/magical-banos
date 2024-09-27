import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const ItineraryCards = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;
  const maxIndex = Math.ceil(cards.length / cardsToShow);
  const navigate = useNavigate();

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };

  const handleCardClick = () => {
    navigate("/itineraries");
  };

  return (
    <div className="relative w-[75%] px-10 overflow-hidden m-auto">
      <div
        className="flex transition-transform duration-300"
        style={{
          transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 p-2"
            style={{ flex: `0 0 ${100 / cardsToShow}%` }}
            onClick={handleCardClick}
          >
            <div
              className={`relative rounded-lg overflow-hidden shadow-lg cursor-pointer ${
                card.title === "1 Day in Baños"
                  ? "bg-darkBlue"
                  : card.title === "2 Days in Baños"
                  ? "bg-lightTan"
                  : card.title === "3 Days in Baños"
                  ? "bg-lightBlue"
                  : card.title === "5 Days in Baños"
                  ? "bg-darkTan"
                  : card.color || "bg-darkBlue" // Default background color
              }`}
            >
              <img
                className="w-full h-64 object-cover rounded-t-lg"
                src={card.image}
                alt={card.title}
              />
              <div className="p-4">
                <h2 className="text-lightBeige text-lg font-bold">
                  {card.title}
                </h2>
                <p className="text-lightBeige">{card.description}</p>
                {card.buttonLabel && (
                  <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-3xl">
                    {card.buttonLabel}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 p-3 bg-gray-400 text-white rounded-full z-10"
        onClick={handlePrevClick}
      >
        <HiChevronLeft className="w-7 h-7" />
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 p-3 bg-gray-400 text-white rounded-full z-10"
        onClick={handleNextClick}
      >
        <HiChevronRight className="w-7 h-7" />
      </button>
    </div>
  );
};

export default ItineraryCards;
