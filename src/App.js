import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Unknown from './pages/Unknown';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/about' exact element={<About />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/projects' exact element={<Projects />} />
        <Route path='/' exact element={<Home />} />
        <Route path='*' element={<Unknown />} />
      </Routes>
    </div>
  );
}

export default App;