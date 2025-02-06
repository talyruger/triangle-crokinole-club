import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CrokLogo from '../assets/logos/CROK NEW LOGO.svg'; // Import the logo

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem; /* Reduced padding to decrease space */
  background-color: #1a1a1a; /* Updated navbar background color */
  color: #f0c040; /* Updated text color */
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  width: 200px;
  height: auto;

  @media (max-width: 768px) {
    width: 150px; /* Adjust logo size for mobile */
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #f0c040; /* Updated menu icon color */
    margin: 5px;
    transition: 0.4s;
  }
`;

const MenuLinks = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #f0c040; /* Updated link color */
    margin-left: 2rem;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
      color: #ff8c00; /* Updated hover color */
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    align-items: flex-start;

    a {
      margin: 1rem 0;
      margin-left: 1rem;
    }
  }
`;

const JoinUsLink = styled.a`
  color: #f0c040;
  margin-left: 2rem;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #ff8c00;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
    margin-left: 1rem;
  }
`;

function Navbar({ onOpenModal }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Collapse the menu when a link is clicked
  };

  return (
    <NavbarWrapper>
      <Logo src={CrokLogo} alt="Crok Logo" />
      <MenuIcon onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </MenuIcon>
      <MenuLinks isOpen={isOpen}>
        <Link to="/" onClick={handleLinkClick} title="Go to Home">Home</Link>
        <Link to="/how-to-play" onClick={handleLinkClick} title="Learn How to Play Crokinole">How to Play</Link>
        <Link to="/events" onClick={handleLinkClick} title="View Upcoming Events">Events</Link>
        <Link to="/sec-clubs" onClick={handleLinkClick} title="Explore the Southeast Crokinole Circuit">Southeast Crokinole Circuit</Link>
        <Link to="/affiliates" onClick={handleLinkClick} title="View Our Affiliates">Affiliates</Link>
        <Link to="/host-game-night" onClick={handleLinkClick} title="Host a Game Night with Us">Host a Game Night</Link>
        <Link to="/about" onClick={handleLinkClick} title="Learn More About Us">About Us</Link>
        <JoinUsLink onClick={onOpenModal}>Join Us</JoinUsLink>
      </MenuLinks>
    </NavbarWrapper>
  );
}

export default Navbar;
