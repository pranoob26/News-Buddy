import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Weather from "./components/Weather";
import Politics from "./components/Politics";
import Bollywood from "./components/bollywood";
import Sports from "./components/Sports";
import Finance from "./components/Finance";
import Likes from "./components/likes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />}></Route>
        <Route path="/politics" element={<Politics />}></Route>
        <Route path="/bollywood" element={<Bollywood />}></Route>
        <Route path="/sports" element={<Sports />}></Route>
        <Route path="/finance" element={<Finance />}></Route>
        <Route path="/liked" element={<Likes />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
