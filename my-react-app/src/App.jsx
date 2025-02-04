import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Internship from "./pages/Internship";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import ScrollToTop from "./components/ScrollToTop"; // Import the ScrollToTop component

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures scroll position resets on route change */}
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/media" element={<Media />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
