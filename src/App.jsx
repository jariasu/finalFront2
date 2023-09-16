import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Details from "./routes/Details";
import Contact from "./routes/Contact";
import Fav from "./routes/Fav";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {

  
  return (
    <>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home  />} />
        <Route path="/dentist/:id" element={<Details  />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fav" element={<Fav />} />
      </Routes>
      <Footer />
    </div>
      
    </>
  );
}

export default App;
