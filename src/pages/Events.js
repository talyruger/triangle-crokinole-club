import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus, faMapMarkerAlt, faDownload } from '@fortawesome/free-solid-svg-icons';
import fortnightLogo from '../assets/logos/FortnightLogo.png';
import blackbirdLogo from '../assets/logos/BlackbirdLogo.png';
import whiteStreetLogo from '../assets/logos/WhiteStreetLogo.png';
import seniorCenterLogo from '../assets/logos/NWSlogo.jpeg';
import rdBrewingLogo from '../assets/logos/R&DBrewingLogo.png';

const EventsContainer = styled.div`
  padding: 1rem;
  max-width: 900px;
  margin: 1rem auto;

  @media (max-width: 768px) {
    padding: 0.5rem;
    margin: 0.5rem auto;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const SubscribeButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #c07a3a;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s, opacity 0.2s;

  &:hover {
    background-color: #a06830;
    opacity: 0.92;
  }
`;

const MonthHeading = styled.h2`
  font-size: 1.05rem;
  color: #b8973a;
  margin: 1.5rem 0 0.5rem;
  padding-bottom: 0.35rem;
  border-bottom: 1px solid #d4c8a0;
`;

const EventRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 1rem;
  border-radius: 10px;
  background: ${({ $isToday }) => ($isToday ? '#faf6ed' : '#f9f8f6')};
  border-left: 3px solid ${({ $isToday }) => ($isToday ? '#c07a3a' : '#d4c8a0')};
  margin-bottom: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  transition: transform 0.15s, box-shadow 0.15s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const VenueLogo = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;

  @media (max-width: 600px) {
    width: 36px;
    height: 36px;
  }
`;

const DateBlock = styled.div`
  min-width: 110px;
  flex-shrink: 0;

  .day-name {
    font-weight: 700;
    font-size: 0.95rem;
    color: #333;
  }

  .date-num {
    font-size: 0.85rem;
    color: #666;
  }
`;

const EventInfo = styled.div`
  flex: 1;

  .venue-name {
    font-weight: 600;
    font-size: 1rem;
    color: #333;
  }

  .time {
    font-size: 0.9rem;
    color: #666;
    margin-top: 0.15rem;
  }
`;

const EventActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-shrink: 0;

  a, button {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.85rem;
    padding: 0.35rem 0.7rem;
    border-radius: 6px;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.2s;
  }

  a {
    color: #8a7040;
    background: rgba(184, 151, 58, 0.06);
    border: 1px solid rgba(184, 151, 58, 0.2);

    &:hover {
      background: rgba(184, 151, 58, 0.14);
      text-decoration: none;
    }
  }

  button {
    color: #7a8b9a;
    background: rgba(122, 139, 154, 0.06);
    border: 1px solid rgba(122, 139, 154, 0.2);

    &:hover {
      background: rgba(122, 139, 154, 0.14);
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const TodayBadge = styled.span`
  background: #c07a3a;
  color: white;
  font-size: 0.65rem;
  font-weight: 600;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  margin-left: 0.4rem;
  vertical-align: middle;
`;

// List of dates to exclude (format: 'YYYY-MM-DD')
const excludedDates = ['2025-07-03'];

const isExcluded = (date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return excludedDates.includes(`${y}-${m}-${d}`);
};

const MONTHS_AHEAD = 6;

const getNextMonthlyDates = (day, week) => {
  const dates = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let monthOffset = 0; monthOffset < MONTHS_AHEAD; monthOffset++) {
    const nextDate = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
    while (nextDate.getDay() !== day || Math.ceil(nextDate.getDate() / 7) !== week) {
      nextDate.setDate(nextDate.getDate() + 1);
    }
    if (nextDate >= today && !isExcluded(nextDate)) {
      dates.push(new Date(nextDate));
    }
  }
  return dates;
};

// Function to get next dates for locations with multiple schedules
const getMultiLocationDates = (locations) => {
  const allDates = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let monthOffset = 0; monthOffset < MONTHS_AHEAD; monthOffset++) {
    for (const location of locations) {
      const { day, weeks, time } = location;
      for (const week of weeks) {
        const nextDate = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
        while (nextDate.getDay() !== day || Math.ceil(nextDate.getDate() / 7) !== week) {
          nextDate.setDate(nextDate.getDate() + 1);
        }
        if (nextDate >= today && !isExcluded(nextDate)) {
          allDates.push({ date: new Date(nextDate), time });
        }
      }
    }
  }
  allDates.sort((a, b) => a.date - b.date);
  return allDates;
};

// Parse time string like "6:30 PM" or "3:00 PM - 5:00 PM" into { startHour, startMin, endHour, endMin }
const parseTimeRange = (timeStr) => {
  const parse12h = (s) => {
    const match = s.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!match) return { hour: 18, min: 0 };
    let hour = parseInt(match[1], 10);
    const min = parseInt(match[2], 10);
    const period = match[3].toUpperCase();
    if (period === 'PM' && hour !== 12) hour += 12;
    if (period === 'AM' && hour === 12) hour = 0;
    return { hour, min };
  };

  const parts = timeStr.split('-');
  const start = parse12h(parts[0]);
  const end = parts.length > 1 ? parse12h(parts[1]) : { hour: start.hour + 2, min: start.min };
  return { startHour: start.hour, startMin: start.min, endHour: end.hour, endMin: end.min };
};

// Format date to ICS format: 20250701T183000
const toICSDate = (date, hour, min) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const h = String(hour).padStart(2, '0');
  const mi = String(min).padStart(2, '0');
  return `${y}${m}${d}T${h}${mi}00`;
};

const generateICS = (eventList) => {
  let ics = `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Triangle Crokinole Club//Events//EN\r\nCALSCALE:GREGORIAN\r\nMETHOD:PUBLISH\r\n`;

  for (const evt of eventList) {
    const { startHour, startMin, endHour, endMin } = parseTimeRange(evt.time);
    const dtStart = toICSDate(evt.date, startHour, startMin);
    const dtEnd = toICSDate(evt.date, endHour, endMin);
    const uid = `${dtStart}-${evt.title.replace(/\s+/g, '')}@trianglecrokinole`;
    const now = toICSDate(new Date(), new Date().getHours(), new Date().getMinutes());

    // Alarm 1 hour before
    ics += `BEGIN:VEVENT\r\n`;
    ics += `UID:${uid}\r\n`;
    ics += `DTSTAMP:${now}\r\n`;
    ics += `DTSTART:${dtStart}\r\n`;
    ics += `DTEND:${dtEnd}\r\n`;
    ics += `SUMMARY:Crokinole @ ${evt.title}\r\n`;
    ics += `DESCRIPTION:${evt.description}\r\n`;
    ics += `URL:${evt.link}\r\n`;
    ics += `BEGIN:VALARM\r\nTRIGGER:-PT1H\r\nACTION:DISPLAY\r\nDESCRIPTION:Crokinole in 1 hour!\r\nEND:VALARM\r\n`;
    ics += `END:VEVENT\r\n`;
  }

  ics += `END:VCALENDAR\r\n`;
  return ics;
};

const downloadICS = (eventList, filename) => {
  const icsContent = generateICS(eventList);
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Events = () => {
  const venues = [
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
      locations: [
        {
          day: 1, // Monday
          weeks: [2, 4], // 2nd and 4th week of the month
          time: '3:00 PM - 5:00 PM'
        },
        {
          day: 3, // Wednesday
          weeks: [3], // 3rd week of the month
          time: '2:00 PM - 4:00 PM'
        }
      ],
      title: 'Wake Forest Center for Active Aging',
      link: 'https://g.co/kgs/6gbT7Uy',
      logo: seniorCenterLogo,
      description: 'Join us at Wake Forest Center for Active Aging for a fun afternoon of crokinole!'
    },
    {
      day: 0, // Sunday
      week: 4, // 4th week of the month
      title: 'R&D Brewing - Seven Saturdays Taproom',
      link: 'https://share.google/0XtCdmQ7LwYgnlJjT',
      logo: rdBrewingLogo,
      time: '3:00 PM - 5:00 PM',
      description: 'Join us at R&D Brewing - Seven Saturdays Taproom for a fun afternoon of crokinole!'
    },
  ];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Build a flat, sorted list of all upcoming events across all venues
  const allUpcoming = [];
  for (const venue of venues) {
    let nextDates = [];
    if (venue.locations) {
      try {
        nextDates = getMultiLocationDates(venue.locations);
      } catch (e) {
        nextDates = [];
      }
    } else if (typeof venue.day === 'number' && typeof venue.week === 'number') {
      try {
        nextDates = getNextMonthlyDates(venue.day, venue.week).map(date => ({
          date,
          time: venue.time
        }));
      } catch (e) {
        nextDates = [];
      }
    }

    for (const d of nextDates) {
      allUpcoming.push({
        date: d.date,
        time: d.time,
        title: venue.title,
        logo: venue.logo,
        link: venue.link,
        description: venue.description,
      });
    }
  }

  allUpcoming.sort((a, b) => a.date - b.date);

  // Group by month
  const grouped = {};
  for (const evt of allUpcoming) {
    const key = `${evt.date.getFullYear()}-${evt.date.getMonth()}`;
    if (!grouped[key]) {
      grouped[key] = { label: `${MONTH_NAMES[evt.date.getMonth()]} ${evt.date.getFullYear()}`, events: [] };
    }
    grouped[key].events.push(evt);
  }

  const handleDownloadAll = () => {
    downloadICS(allUpcoming, 'triangle-crokinole-all-events.ics');
  };

  const handleDownloadSingle = (evt) => {
    const safeName = evt.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
    const m = String(evt.date.getMonth() + 1).padStart(2, '0');
    const d = String(evt.date.getDate()).padStart(2, '0');
    downloadICS([evt], `crokinole-${safeName}-${m}-${d}.ics`);
  };

  return (
    <EventsContainer>
      <HeaderRow>
        <h1 style={{ color: '#b8973a', margin: 0 }}>Upcoming Events</h1>
        <SubscribeButton onClick={handleDownloadAll}>
          <FontAwesomeIcon icon={faDownload} /> Add All to Calendar
        </SubscribeButton>
      </HeaderRow>

      {Object.values(grouped).map((group) => (
        <div key={group.label}>
          <MonthHeading>{group.label}</MonthHeading>
          {group.events.map((evt, i) => {
            const isToday = evt.date.getTime() === today.getTime();
            return (
              <EventRow key={`${group.label}-${i}`} $isToday={isToday}>
                <VenueLogo src={evt.logo} alt={evt.title} />
                <DateBlock>
                  <div className="day-name">
                    {DAY_NAMES[evt.date.getDay()]}
                    {isToday && <TodayBadge>TODAY</TodayBadge>}
                  </div>
                  <div className="date-num">
                    {MONTH_NAMES[evt.date.getMonth()]} {evt.date.getDate()}
                  </div>
                </DateBlock>
                <EventInfo>
                  <div className="venue-name">{evt.title}</div>
                  <div className="time">{evt.time}</div>
                </EventInfo>
                <EventActions>
                  <a href={evt.link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> Map
                  </a>
                  <button onClick={() => handleDownloadSingle(evt)} title="Add to your phone/computer calendar">
                    <FontAwesomeIcon icon={faCalendarPlus} /> Add to Calendar
                  </button>
                </EventActions>
              </EventRow>
            );
          })}
        </div>
      ))}
    </EventsContainer>
  );
};

export default Events;