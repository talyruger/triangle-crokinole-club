import React from 'react';
import styled from 'styled-components';

const HowToPlayContainer = styled.div`
  padding: 2rem; /* Reduced padding */
  max-width: 1000px; /* Reduced max-width */
  margin: 2rem auto; /* Reduced margin */
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.primary}; /* Updated to use theme's primary color */
  margin-bottom: 1rem;
  font-size: 2rem; /* Adjusted font size for mobile */
  font-weight: 700; /* Increased font weight */
`;

const Paragraph = styled.p`
  font-size: 1.1rem; /* Reduced font size */
  line-height: 1.6; /* Reduced line height */
  color: ${({ theme }) => theme.colors.text}; /* Updated to use theme's text color */
  margin-bottom: 1rem; /* Reduced margin-bottom */

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjusted font size for mobile */
  }
`;

const VideoContainer = styled.div`
  margin: 1.5rem 0; /* Reduced margin */
  iframe {
    width: 100%;
    height: 350px; /* Reduced height for the video */
    border: none;
  }
`;

const HowToPlay = () => {
  return (
    <HowToPlayContainer>
      <Heading>How to Play Crokinole - Join the Fun!</Heading>
      <Paragraph>
        Crokinole is a fun and engaging game that can be played by two to four players. The objective is to score points by flicking discs into the center of the board while also trying to knock your opponent's discs out of scoring position. Join us at our events to learn more about the strategies and techniques to master the game!
      </Paragraph>
      <Paragraph>
        To set up the game, each player takes turns placing their discs on the board. Players can score points by landing their discs in the higher-scoring areas of the board. The game continues until all discs have been played, and the player with the highest score wins!
      </Paragraph>
      <Paragraph>
        For a more detailed understanding of the rules and strategies, consider joining our club events where experienced players can guide you through the game. Don't miss out on the chance to enhance your skills and enjoy the camaraderie of fellow players!
      </Paragraph>
      <VideoContainer>
        <iframe 
          src="https://www.youtube.com/embed/wNPU3moG8lE?start=4" 
          title="How to Play Crokinole" 
          allowFullScreen 
        />
      </VideoContainer>
    </HowToPlayContainer>
  );
};

export default HowToPlay;
