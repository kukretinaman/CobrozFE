import React from 'react';
import './styles/main.css';
import FrontPage from './FrontPage.jsx';
import SecondPage from './SecondPage.jsx'; // Import the SecondPage component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <FrontPage /> */}
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/second" element={<SecondPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
