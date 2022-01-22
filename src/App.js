import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Nav';
import About from './screens/About';
import Contact from './screens/Contact';
import Home from './screens/Home';
import Portfolio from './screens/Portfolio';
import Services from './screens/Services';

function App() {
  return (
    <>
      <Router>
        <Main />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>

      </Router>
      <Footer />
     

    </>
  );
}

export default App;
