import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import Skills from "./Components/Skills";
import NavigationButtons from "./Components/NavigationButtons";
import Projects from "./Components/Projects";
import Form from "./Components/Form";
import "./App.css";
import Footer from "./Components/Footer";
import MyInfo from "./Components/MyInfo";
import Contact from "./Components/Contact";
//  الترتيب مهم جدا !!
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroSection />
      <Skills />
      <NavigationButtons />
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/info" element={<MyInfo />} />
      </Routes>
      <Form />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
