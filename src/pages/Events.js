import React from 'react';
import styled from 'styled-components';
import fortnightLogo from '../assets/logos/FortnightLogo.png';
import blackbirdLogo from '../assets/logos/BlackbirdLogo.png';
import whiteStreetLogo from '../assets/logos/WhiteStreetLogo.png';
import seniorCenterLogo from '../assets/logos/NWSlogo.jpeg';
import TournamentCard from '../components/TournamentCard';

const EventsContainer = styled.div`
  padding: 0.75rem; /* Adjusted padding for better compactness */
  max-width: 1200px;
  margin: 1rem auto; /* Reduced margin for mobile */

  @media (max-width: 768px) {
    padding: 0.5rem; /* Further reduce padding on smaller screens */
    margin: 0.5rem auto; /* Further reduce margin on smaller screens */
  }
`;

const EventList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 0.75rem; /* Adjusted gap for better compactness */
`;

const EventCard = styled.div`
  border: 1px solid #e0e0e0;
  padding: 0.75rem; /* Adjusted padding for better compactness */
  border-radius: 10px;
  background-color: #f9f9f9; /* Updated background color */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  transition: transform 0.2s, background-color 0.3s;

  &:hover {
    transform: scale(1.05);
    background-color: #eaeaea; /* Added background color change on hover */
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  h3 {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary}; /* Updated title color */
  }

  p {
    color: ${({ theme }) => theme.colors.text}; /* Updated description color */
    font-size: 1rem;
    margin: 0.5rem 0;
  }

  a {
    color: ${({ theme }) => theme.colors.secondary}; /* Updated link color */
    text-decoration: none;
    margin-top: 1rem;
  }
`;

const EventDetails = styled.div`
  text-align: center;
`;

const DateText = styled.p`
  color: ${({ isToday }) => (isToday ? '#ff0000' : '#000000')}; /* Highlight today's date in red */
  font-weight: ${({ isToday }) => (isToday ? 'bold' : 'normal')};
`;

const getNextMonthlyDates = (day, week, count) => {
  const dates = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let monthOffset = 0;
  while (dates.length < count) {
    const nextDate = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
    while (nextDate.getDay() !== day || Math.ceil(nextDate.getDate() / 7) !== week) {
      nextDate.setDate(nextDate.getDate() + 1);
    }

    // Add dates that are in the future or today
    if (nextDate >= today) {
      dates.push(new Date(nextDate));
    }

    monthOffset++;
  }

  return dates;
};

const getNextTwoMondays = () => {
  const dates = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let monthOffset = 0;
  while (dates.length < 2) {
    const month = today.getMonth() + monthOffset;
    const year = today.getFullYear() + Math.floor(month / 12);
    const adjustedMonth = month % 12;

    let mondayCount = 0;
    for (let day = 1; day <= 31; day++) {
      const date = new Date(year, adjustedMonth, day);
      if (date.getMonth() !== adjustedMonth) break; // Stop if we go to the next month
      
      if (date.getDay() === 1) { // Check if it's Monday
        mondayCount++;
        
        // Add dates that are in the future or today
        if (date >= today && (mondayCount === 2 || mondayCount === 4)) {
          dates.push(new Date(date));
        }
      }
    }

    monthOffset++;
  }

  return dates;
};

const tournaments = [
  {
    name: 'Flag Day Doubles Tournament',
    date: '2025-06-15',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScboaNUUZ8jDFcLdi71Ybx-y6Il9RqtrRuqp-qTKv90UYmS8w/viewform?usp=header',
    description: 'Join us for our annual Flag Day Doubles Tournament! Teams of 2, all skill levels welcome.'
  }
  // Additional tournaments can be added here
];

const Events = () => {
  const events = [
    {
      day: 4, // Thursday
      week: 1, // 1st week of the month
      title: 'Fortnight Brewing Wake Forest',
      link: 'https://g.co/kgs/9UnWiYy',
      logo: fortnightLogo,
      time: '6:30 PM',
      description: 'Join us at Fortnight Brewing Wake Forest for a fun evening of crokinole!'
    },
    {
      day: 3, // Wednesday
      week: 2, // 2nd week of the month
      title: 'Blackbird Brewery',
      link: 'https://g.co/kgs/rX5jnqw',
      logo: blackbirdLogo,
      time: '6:30 PM',
      description: 'Join us at Blackbird Brewery for a fun evening of crokinole!'
    },
    {
      day: 1, // Monday
      week: 3, // 3rd week of the month
      title: 'White Street Brewing Co',
      link: 'https://g.co/kgs/eDFrNwE',
      logo: whiteStreetLogo,
      time: '6:30 PM',
      description: 'Join us at White Street Brewing Co for a fun evening of crokinole!'
    },
    {
      day: 3, // Wednesday
      week: 3, // 3rd week of the month
      title: 'Wake Forest Center for Active Aging', // Updated name
      link: 'https://g.co/kgs/6gbT7Uy',
      logo: seniorCenterLogo,
      time: '2:00 PM - 4:00 PM', // Updated time
      description: 'Join us at Wake Forest Center for Active Aging for a fun afternoon of crokinole!' // Updated name
    },
  ];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <EventsContainer>
      <h1 style={{ color: '#f0c040', textAlign: 'center' }}>Upcoming Tournaments</h1>
      {tournaments.map((tournament, index) => (
        <TournamentCard key={`tournament-${index}`} tournament={tournament} />
      ))}
      
      <h1 style={{ color: '#f0c040', textAlign: 'center', marginTop: '2rem' }}>Regular Crokinole Events</h1>
      <EventList style={{ gap: '1rem' }}>
        {events.map((event, index) => {
          const nextDates = getNextMonthlyDates(event.day, event.week, 2);
          return (
            <EventCard key={index}>
              <img src={event.logo} alt={`${event.title} logo`} />
              <EventDetails>
                <h3>{event.title}</h3>
                <p>Next Crokinole Game Dates:</p>
                {nextDates.map((date, i) => (
                  <DateText key={i} isToday={date.getTime() === today.getTime()}>
                    {date.toDateString()} at {event.time}
                  </DateText>
                ))}
                <a href={event.link} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
              </EventDetails>
            </EventCard>
          );
        })}
      </EventList>
    </EventsContainer>
  );
};

export default Events;