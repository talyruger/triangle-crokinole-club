import React from 'react';
import styled from 'styled-components';
import traceyBoardsLogo from '../assets/logos/TraceyLogo.png';
import brownCastleLogo from '../assets/logos/BrowncastleLogo.png';

const AffiliatesContainer = styled.div`
  padding: 3rem; /* Increased padding */
  max-width: 1200px;
  margin: 4rem auto;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const AffiliateLinks = styled.div`
  display: grid; /* Changed to grid layout */
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive grid */
  justify-content: center;
  gap: 2rem;
`;

const AffiliateCard = styled.div`
  background: #f9f9f9; /* Updated background color */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: left;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05); /* Scale effect on hover */
  }
`;

const AffiliateLogo = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const AffiliateTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary}; /* Updated color for a more professional look */
  font-size: 1.5rem; /* Increased font size */
  margin-bottom: 0.5rem;
`;

const AffiliateDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text}; /* Updated description color */
`;

const AffiliateButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem; /* Increased padding for better visibility */
  margin-top: 0.5rem;
  background: #1a1a1a; /* Updated button color to match footer */
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.3s ease;

  &:hover {
    background: #f0c040; /* Updated hover color */
  }
`;

const Affiliates = () => {
  const affiliates = [
    {
      name: "Tracey Boards",
      logo: traceyBoardsLogo,
      description: "Premium crokinole boards and accessories. Get free shipping on boards available with the Club",
      link: "https://traceyboards.com"
    },
    {
      name: "Brown Castle Games",
      logo: brownCastleLogo,
      description: "Quality crokinole boards and game pieces. Use code 'TRIANGLEGIFT' for 5% off.",
      link: "https://browncastlegames.com"
    }
  ];

  return (
    <AffiliatesContainer>
      <h1 style={{ color: '#f0c040' }}>Our Trusted Affiliates</h1> {/* Updated heading color */}
      <p style={{ color: '#b0b0b0' }}>Support these amazing partners who provide top-notch crokinole equipment. Our club is a non-profit organization and is always open to additional affiliates.</p> {/* Updated paragraph color */}
      <AffiliateLinks>
        {affiliates.map((affiliate, index) => (
          <AffiliateCard key={index}>
            <AffiliateLogo src={affiliate.logo} alt={`${affiliate.name} Logo`} />
            <AffiliateTitle>{affiliate.name}</AffiliateTitle>
            <AffiliateDescription>{affiliate.description}</AffiliateDescription>
            <AffiliateButton href={affiliate.link} target="_blank" rel="noopener noreferrer">
              Visit Store
            </AffiliateButton>
          </AffiliateCard>
        ))}
      </AffiliateLinks>
    </AffiliatesContainer>
  );
};

export default Affiliates;
