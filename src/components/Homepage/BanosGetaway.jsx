import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const BanosGetaway = () => {
  return (
    <>
      <div className="flex justify-center gap-7 align-middle m-auto px-40 py-28 ">
        <h2 className="w-1/2 text-4xl font-title text-darkBlue leading-[3rem] pl-20">Plan Your Perfect Getaway to Baños</h2>
        <div className="w-1/2 text-left pr-20">
          <p className="text-xl text-para">
            From exploring cascading waterfalls and lush forests to soaking in
            natural hot springs, Baños offers the ideal blend of relaxation and
            excitement for every traveler.
          </p>
          <button className="bg-darkTan text-lightBeige rounded-3xl py-2 px-6 text-xl pl-10 mt-8">
            <Link className="flex justify-center align-middle" to="/contact">
              Baños Itineraries
              <RiArrowRightSLine className="mt-0.5 text-2xl" />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default BanosGetaway;
