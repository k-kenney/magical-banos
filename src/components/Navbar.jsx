import { Link } from "react-router-dom";
import logo from "../assets/banos-logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="fixed w-full z-20 flex items-center justify-between px-8 py-0">
        <Link to="/" className="w-1/6">
          <img
            className="md:w-[160px] md:h-[160px] w-[120px] h-[120px] "
            src={logo}
            alt="logo"
          />
        </Link>
        <div className="w-1/2 text-lightBeige font-thin flex justify-center align-middle text-lg gap-16">
          <Link className=""to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/baths">Baths</Link>
          <Link to="/toDo">What To Do</Link>
          <Link to="/toEat">Where To Eat</Link>
        </div>
        <button className="w-40 bg-lightTan text-lightBeige rounded-3xl py-2 px-4 mr-10 text-lg">
          <Link className="" to="/contact">Contact</Link>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
