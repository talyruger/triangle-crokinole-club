import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; // Import the love icon

const FooterContainer = styled.footer`
  background-color: #2d2d2d;
  color: #b8a980;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2026 Triangle Crokinole Club. All rights reserved.</p>
      <p>
        Follow us on {' '} -
        <a href="https://www.facebook.com/groups/248685788265073" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="lg" color="#b8a980" />
        </a>
         -  Website Created with <FontAwesomeIcon icon={faHeart} size="lg" color="#b8a980" /> by{' '}
        <a href="https://trikastudio.com" target="_blank" rel="noopener noreferrer" style={{ color: '#b8a980' }}>
          trikastudio.com
        </a>
      </p>
    </FooterContainer>
  );
};

export default Footer;