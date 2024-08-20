import { Link } from "react-router-dom";
import heroImage from "../../assets/banos-hero.jpg";
import { RiArrowRightSLine } from "react-icons/ri";

const HomepageHero = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      {/* Dark blue background */}
      <div className="absolute inset-0 bg-darkBlue z-0"></div>

      {/* Background image with opacity */}
      <div
        style={{ backgroundImage: `url(${heroImage})` }}
        className="absolute inset-0 bg-cover bg-center opacity-40 z-0"
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center p-8 pt-20">
      <p className="text-xl text-lightBeige md:text-2xl lg:text-3xl font-title font-light pb-8">Experience the </p>
        <h1 className="text-4xl text-lightBeige md:text-6xl lg:text-8xl mb-4 font-title">
          Magic of BAÑOS
        </h1>
        <p className="text-xl text-lightBeige md:text-2xl lg:text-3xl pt-4 font-title font-light pb-14 ">Ecuador </p>
        <button className="bg-lightBlue text-lightBeige rounded-3xl py-2.5 px-8 text-xl pl-10">
          <Link className="flex justify-center align-middle" to="/contact">Start Exploring<RiArrowRightSLine className="mt-0.5 text-2xl"/> </Link>
        </button>
      </div>
    </div>
  );
};

export default HomepageHero;
