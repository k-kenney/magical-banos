import { Link } from "react-router-dom";
import logo from "../assets/banos-logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-transparent text-white z-20 flex items-center justify-between px-8 py-0">
        <Link to="/">
          <img
            className="md:w-[160px] md:h-[160px] w-[120px] h-[120px]"
            src={logo}
            alt="logo"
          />
        </Link>
        <div className="">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/baths">Baths</Link>
          <Link to="/toDo">What To Do</Link>
          <Link to="/toEat">Where To Eat</Link>
        </div>
        <button>
          <Link to="/contact">Contact</Link>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
