import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Sides from './pages/Sides';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Salads from './pages/Salads';
import Wraps from './pages/Wraps';
import Dinners from './pages/Dinners';
import Desserts from './pages/Desserts';
import Beverages from './pages/Beverages';
import Catering from './pages/Catering';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/sides" element={<Sides />} />
        <Route path="/salads" element={<Salads />} />
        <Route path="/wraps" element={<Wraps />} />
        <Route path="/dinners" element={<Dinners />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
