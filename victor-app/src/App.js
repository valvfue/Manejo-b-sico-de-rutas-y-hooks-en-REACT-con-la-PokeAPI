import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Inicio';
import Generation from './pages/Generacion';
import Contacto from './pages/Contacto';
import UserInfo from './pages/UserInfo'; 

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/gen1">Gen1</Link></li>
            <li><Link to="/gen2">Gen2</Link></li>
            <li><Link to="/gen3">Gen3</Link></li>
            <li><Link to="/contact/morgado">Contacto</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gen1" element={<Generation generation={1} />} />
          <Route path="/gen2" element={<Generation generation={2} />} />
          <Route path="/gen3" element={<Generation generation={3} />} />
          <Route path="/contact/:username" element={<Contacto />}>
            <Route path="" element={<UserInfo />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;


