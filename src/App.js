import "./App.css";
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Contact from "./Pages/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import PageNot from "./Pages/PageNotFound/PageNot";

function App() {
  return (
    <>
     {/* <NavBar /> */}
      <Routes>
        <Route path="/*" element={<PageNot/>} />
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      

    </>
  );
}

export default App;
