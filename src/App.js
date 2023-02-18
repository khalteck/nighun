import { Route, Routes } from "react-router-dom";
import "./output.css";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/product/:name" element={<Product />} />
    </Routes>
  );
}

export default App;
