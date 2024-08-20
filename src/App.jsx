import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Navbar from "./components/Navbar";
import Aboutpage from "./screens/Aboutpage";
import Baths from "./screens/Baths";
import ToDo from "./screens/ToDo";
import ToEat from "./screens/ToEat";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/baths" element={<Baths />} />
        <Route path="/toDo" element={<ToDo />} />
        <Route path="/toEat" element={<ToEat />} />
      </Routes>
    </Router>
  );
}

export default App;
