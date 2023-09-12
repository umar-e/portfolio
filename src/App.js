import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Unknown from './pages/Unknown';
import Home from './pages/Home';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Unknown />} />
      </Routes>
    </div>
  );
}

export default App;