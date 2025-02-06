// src/pages/Home.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Events from './Events';
import JoinMailingListModal from '../components/JoinMailingListModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  background: #1a1a1a;
  color: white;

  h1 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    border: none;
    border-radius: 5px;
    padding: 1rem 2.0rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    margin-top: 1rem;
    margin-bottom: 1rem;

    &:hover {
      background-color: ${({ theme }) => theme.colors.hover};
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
    
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const ContentSection = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: -2rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <HeroSection>
        <div>
          <h1>Welcome to the Triangle Crokinole Club</h1>
          <p>Join us for exciting crokinole games and community events at multiple locations in the Triangle area! Serving Raleigh, Durham, Chapel Hill, and surrounding areas.</p>
          <button onClick={handleButtonClick}>Join our Community</button>
          <button style={{ margin: '0 1rem' }} onClick={() => window.open('https://www.facebook.com/groups/248685788265073', '_blank')}>
            Follow Us <FontAwesomeIcon icon={faFacebook} />
          </button>
        </div>
      </HeroSection>
      <ContentSection>
        <Events />
      </ContentSection>
      {isModalOpen && <JoinMailingListModal onClose={handleCloseModal} />}
    </>
  );
}

export default Home;
