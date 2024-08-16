import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-transparent text-white z-20 flex justify-center p-4">
        <Link to="/">Home</Link>
        {/* <Link to="/about">About</Link> */}
      </nav>
    </>
  );
};

export default Navbar;
