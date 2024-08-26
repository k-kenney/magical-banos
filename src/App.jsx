import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Navbar from "./components/Navbar";
import Aboutpage from "./screens/Aboutpage";
import Baths from "./screens/Baths";
import ToDo from "./screens/ToDo";
import ToEat from "./screens/ToEat";
import Footer from "./components/Footer";

function App() {
  const [navbarOpacity, setNavbarOpacity] = useState(1); // Start with full opacity

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;
      const fadeStart = viewportHeight * 0.3; // 30vh

      if (scrollTop > fadeStart) {
        // Adjust the divisor here for a smoother fade
        const newOpacity = Math.max(1 - (scrollTop - fadeStart) / 200, 0);
        setNavbarOpacity(newOpacity);
      } else {
        setNavbarOpacity(1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <div style={{ opacity: navbarOpacity, transition: "opacity 0.5s ease" }}>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/baths" element={<Baths />} />
        <Route path="/toDo" element={<ToDo />} />
        <Route path="/toEat" element={<ToEat />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
