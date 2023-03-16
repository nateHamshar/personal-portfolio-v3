import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Home.js'; 
import Navbar from './Navbar';
import Resume from './Resume';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <div className="pages">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
