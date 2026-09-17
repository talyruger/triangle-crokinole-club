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
  padding: 2.5rem 2rem;
  background: #2d2d2d;
  color: #e0dbd4;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
    color: #cdb87d;
    letter-spacing: 0.02em;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: #c5c0b8;
    line-height: 1.6;
  }

  button {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    border: none;
    border-radius: 6px;
    padding: 0.85rem 1.8rem;
    cursor: pointer;
    transition: background-color 0.3s, opacity 0.2s;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: 500;

    &:hover {
      background-color: ${({ theme }) => theme.colors.hover};
      opacity: 0.92;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    
    h1 {
      font-size: 1.7rem;
    }

    p {
      font-size: 0.95rem;
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
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
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
          <h1>Welcome to TRIANGLE Crokinole Club</h1>
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