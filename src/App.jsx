import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Showroom from "./pages/Showroom";
import Tradeins from "./pages/Tradeins";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/showroom" element={<Showroom />} />
        <Route path="/tradeins" element={<Tradeins />} />
      </Routes>
    </>
  );
}

export default App;
