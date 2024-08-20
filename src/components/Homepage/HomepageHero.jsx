import heroImage from "../../assets/banos-hero.jpg";

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
      <div className="relative z-10 text-center p-8">
        <h1 className="text-4xl text-lightBeige md:text-6xl font-bold mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-xl text-white md:text-2xl">
          Your journey starts here.
        </p>
      </div>
    </div>
  );
};

export default HomepageHero;
