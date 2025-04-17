import React from 'react';
import styled from 'styled-components';
import QRCode from 'react-qr-code';
import flagDayLogo from '../assets/logos/Flag_day_doubles_logo.jpg';

const TournamentCard = styled.div`
  border: 1px solid #e0e0e0;
  padding: 0.75rem;
  border-radius: 10px;
  background: linear-gradient(rgba(249, 249, 249, 0.8), rgba(249, 249, 249, 0.8)), 
              url(${flagDayLogo}) center/cover no-repeat;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  transition: transform 0.2s;
  margin-bottom: 1rem;
  width: 100%;
  margin: 0 0 1rem;
  max-width: none;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    gap: 0.2rem;
    max-width: 300px;
    margin: 0 auto 1rem;
  }

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin: 0.25rem 0;
    text-shadow: 1px 1px 2px white;
    font-size: 1.25rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  .date {
    font-weight: bold;
    color: #000000;
    margin: 0.1rem 0;
    font-size: 1rem;
  }

  .qr-container {
    margin: 0.5rem 0;
    padding: 0.25rem;
    background: white;
    width: fit-content;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    margin: 0.25rem 0;
    word-break: break-all;
    font-size: 1rem;
    text-align: center;
    font-weight: bold;
  }
`;

export default ({ tournament }) => {
  return (
    <TournamentCard>
      <h3>{tournament.name}</h3>
      <p className="date">
        {new Date(tournament.date).toDateString()} at Northern Wake Senior Center in Wake Forest
      </p>
      <p>{tournament.description}</p>
      <div className="qr-container" onClick={() => window.open(tournament.registrationLink, '_blank')}>
        <QRCode value={tournament.registrationLink} size={128} />
      </div>
      <a href={tournament.registrationLink} target="_blank" rel="noopener noreferrer">
        Register Here
      </a>
    </TournamentCard>
  );
};
