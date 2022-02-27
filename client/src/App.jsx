import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Operations from "./components/Operations";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto min-h-screen flex flex-col justify-between bg-white divide-y">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
