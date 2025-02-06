// src/pages/SECClubs.js
import React from 'react';
import styled from 'styled-components';
import secLogo from '../assets/logos/SEC_logo.jpg';

const SECClubsContainer = styled.div`
  padding: 2rem;
  max-width: 1000px;
  margin: 3rem auto;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 700;
`;

const SubHeading = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const Logo = styled.img`
  width: 100%;
  max-width: 700px;
  height: auto;
  margin-bottom: 1.5rem;
`;

const SECClubs = () => {
  return (
    <SECClubsContainer>
      <Heading>Southeast Crokinole Circuit - Join the Excitement!</Heading>
      <Logo src={secLogo} alt="SEC Logo" />
      <Paragraph>
        The Southeast Crokinole Circuit aims to promote the growth of crokinole in the Southeastern States by fostering cooperation and friendly competition among its member clubs. We welcome the formation of new clubs and invite everyone to join our vibrant community of crokinole enthusiasts.
      </Paragraph>
      <Paragraph>
        For more information, visit our <a href="https://www.facebook.com/profile.php?id=61562036409798">About Us</a> page or check out our <a href="/events">Upcoming Events</a> to get involved and join the fun!
      </Paragraph>
      <section>
        <SubHeading>Upcoming Events</SubHeading>
        <Paragraph>Stay tuned for our upcoming events!</Paragraph>
      </section>
    </SECClubsContainer>
  );
};

export default SECClubs;
