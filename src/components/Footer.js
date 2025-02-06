import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; // Import the love icon

const FooterContainer = styled.footer`
  background-color: #1a1a1a; /* Updated footer background color */
  color: #f0c040; /* Updated text color */
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2025 Triangle Crokinole Club. All rights reserved.</p>
      <p>
        Follow us on {' '} -
        <a href="https://www.facebook.com/groups/248685788265073" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="lg" color="#f0c040" />
        </a>
         -  Website Created with <FontAwesomeIcon icon={faHeart} size="lg" color="#f0c040" /> by{' '}
        <a href="https://www.linkedin.com/in/chinmaytal/" target="_blank" rel="noopener noreferrer" style={{ color: '#f0c040' }}>
          Chinmay Talekar
        </a>
      </p>
    </FooterContainer>
  );
};

export default Footer;