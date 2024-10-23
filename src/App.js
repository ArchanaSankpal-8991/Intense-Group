import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Slides from './components/Slides';
import Growth from './components/Growth';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/AboutUs';
import OurBusiness from './components/OurBusiness';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/slides" element={<Slides/>}/>
        <Route path="/growth" element={<Growth/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/ourbusiness" element={<OurBusiness/>}/>

        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
