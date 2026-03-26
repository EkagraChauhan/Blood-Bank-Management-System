import Home from './pages/Home';
import Router, {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import OurTeam from './pages/OurTeam';
import About from './pages/About';
import Contact from './pages/Contact';
import DonorRequest from './pages/DonorRequest';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import "./App.css"; 

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-team" element={<OurTeam />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/donor-request" element={<DonorRequest />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
