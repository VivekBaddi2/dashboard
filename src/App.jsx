import React from 'react';
import CardsPage from './CardsPage';
import Navbar from './Navbar';
import './index.css';

function App() {
  return (
    <div className="bg-[#070e1c] min-h-screen font-poppins">
      <Navbar />
      <CardsPage />
    </div>
  );
}

export default App;
