import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Affiliates from './pages/Affiliates';
import Events from './pages/Events';
import SECClubs from './pages/SECClubs';
import HowToPlay from './pages/HowToPlay';
import HostGameNight from './pages/HostGameNight';
import JoinMailingListModal from './components/JoinMailingListModal';
import Footer from './components/Footer'; // Importing Footer

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <GlobalStyles />
      <Router>
        <Navbar onOpenModal={handleOpenModal} />
        <Routes>
          <Route path="/" element={<Home onOpenModal={handleOpenModal} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/affiliates" element={<Affiliates />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sec-clubs" element={<SECClubs />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="/host-game-night" element={<HostGameNight />} />
        </Routes>
      </Router>
      {isModalOpen && <JoinMailingListModal onClose={handleCloseModal} />}
      <Footer /> {/* Adding Footer here */}
    </>
  );
}

export default App;
