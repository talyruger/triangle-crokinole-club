import React, { useState } from 'react';
import styled from 'styled-components';

const HostGameNightContainer = styled.div`
  padding: 3rem;
  max-width: 1200px;
  margin: 4rem auto;
  text-align: center;
  background-color: #ffffff; /* Updated background color */
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem; /* Adjust padding for mobile */
  }
`;

const Title = styled.h1`
  color: #f0c040; /* Updated title color */
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.8rem; /* Adjust font size for mobile */
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #333333; /* Updated description color */
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust font size for mobile */
  }
`;

const ServicesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;
  max-width: 800px;
  margin: 0 auto 2rem auto;

  li {
    font-size: 1.1rem;
    color: #555555;
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;

    &::before {
      content: '•';
      color: #f0c040;
      position: absolute;
      left: 0;
      font-size: 1.5rem;
      line-height: 1;
    }
  }

  @media (max-width: 768px) {
    li {
      font-size: 0.9rem; /* Adjust font size for mobile */
    }
  }
`;

const PricingTable = styled.table`
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  border-collapse: collapse;
  text-align: left;

  th, td {
    padding: 1rem;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f0c040;
    color: #ffffff;
  }

  td {
    background-color: #ffffff;
    color: #333333;
  }

  @media (max-width: 768px) {
    display: block; /* Change to block for mobile */
    overflow-x: auto; /* Allow horizontal scrolling */
  }
`;

const ContactInfo = styled.p`
  font-size: 1.2rem;
  color: #333333;
  margin-top: 2rem;

  strong {
    color: #f0c040;
  }

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust font size for mobile */
  }
`;

const TestimonialsSection = styled.section`
  margin-top: 3rem;
  text-align: left;
`;

const TestimonialCard = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 1rem;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  color: #555555;
`;

const TestimonialAuthor = styled.p`
  font-size: 0.9rem;
  color: #333333;
  font-weight: bold;
  text-align: right;
`;

const HostGameNight = () => {
  const [testimonials] = useState([
    {
      text: "Our dental practice of 35 employees recently had an outstanding office outing hosted by TCC, with multiple boards to play on and three experts on hand from the club to teach (Joe, Joe R., and Dean) everyone was having a great time playing together right away. The event and the game of crokinole itself was such a hit.. many of us have continued to play ever since. We highly recommend Triangle Crokinole Club for your next corporate event.",
      author: (
        <>
          William Daily | Williams, Daily & Frazier Dental | Carolina Implant (
          <a href="https://carolinaimplant.com" target="_blank" rel="noopener noreferrer">
            carolinaimplant.com
          </a>
          )
        </>
      )
    }
  ]);

  return (
    <HostGameNightContainer>
      <Title>Host a Crokinole Game Night with Triangle Crokinole Club</Title>
      <Description>
        Elevate your next event with a unique and engaging crokinole game night experience. At Triangle Crokinole Club, we specialize in providing comprehensive event management services tailored to your specific needs. Whether you're hosting a corporate event, a private party, or an outdoor gathering, our team is dedicated to delivering a memorable and enjoyable crokinole experience for all attendees.
      </Description>
      <ServicesList>
        <li><strong>Game Boards and Materials:</strong> We provide high-quality crokinole boards and all necessary materials to ensure a seamless gaming experience.</li>
        <li><strong>Expert Instruction:</strong> Our experienced staff will offer detailed instructions and demonstrations to ensure all participants understand the rules and strategies of crokinole.</li>
        <li><strong>Event Management:</strong> From setup to cleanup, our team handles all aspects of event management, including organizing and running competitions, keeping score, and ensuring a smooth flow of activities.</li>
        <li><strong>Customizable Packages:</strong> We offer customizable event packages to suit your specific requirements, including themed events, team-building activities, and more.</li>
      </ServicesList>
      <Description>
        Let us take care of the details while you enjoy a night of fun and camaraderie. Below is our pricing structure for different event packages:
      </Description>
      <PricingTable>
        <thead>
          <tr>
            <th>Package</th>
            <th>Details</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Basic Package</td>
            <td>Includes game boards, materials, and basic instruction.</td>
            <td>$250</td>
          </tr>
          <tr>
            <td>Standard Package</td>
            <td>Includes everything in the Basic Package plus event management and scoring.</td>
            <td>$450</td>
          </tr>
          <tr>
            <td>Premium Package</td>
            <td>Includes everything in the Standard Package plus customizable themes and team-building activities.</td>
            <td>$600</td>
          </tr>
        </tbody>
      </PricingTable>
      <Description>
        For inquiries and to book your unforgettable crokinole event, please contact us at:
      </Description>
      <ContactInfo>
        <strong>Phone:</strong> 440-476-2315<br />
        <strong>Email:</strong> info@trianglecrokinoleclub.com
      </ContactInfo>
      <TestimonialsSection>
        <Title>Customer Testimonials</Title>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <TestimonialText>"{testimonial.text}"</TestimonialText>
            <TestimonialAuthor>- {testimonial.author}</TestimonialAuthor>
          </TestimonialCard>
        ))}
      </TestimonialsSection>
    </HostGameNightContainer>
  );
};

export default HostGameNight;