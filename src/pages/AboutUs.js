import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import logo from '../assets/images/TCC_logo.jpg';
import image1 from '../assets/images/ClubMembersImage1.jpeg';
import image2 from '../assets/images/ClubMembersImage2.jpg';
import image3 from '../assets/images/ClubMembersImage3.jpg';
import image4 from '../assets/images/ClubMembersImage4.jpg';
import image5 from '../assets/images/ClubMembersImage5.jpg';
import image6 from '../assets/images/ClubMembersImage6.jpg';
import image7 from '../assets/images/ClubMembersImage7.jpg';
import image8 from '../assets/images/ClubMembersImage8.jpg';

const AboutContainer = styled.div`
  padding: 1.5rem; /* Reduced padding */
  max-width: 1200px;
  margin: 2rem auto; /* Reduced margin */
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem; /* Reduced margin */
  font-size: 2rem; /* Reduced font size */
  font-weight: 700;
`;

const SubHeading = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem; /* Reduced margin */
  font-size: 1.5rem; /* Reduced font size */
  font-weight: 600;
`;

const Paragraph = styled.p`
  font-size: 0.9rem; /* Reduced font size */
  line-height: 1.5; /* Adjusted line height */
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem; /* Reduced margin */
`;

const ImageCarousel = styled.div`
  position: relative;
  height: 400px; /* Set a fixed height to prevent content shifting */
  overflow: hidden; /* Hide overflow to maintain layout */
`;

const Testimonial = styled.blockquote`
  font-style: italic;
  color: #555;
  margin: 1rem 0; /* Reduced margin */
`;

const AboutUs = () => {
  const images = [
    logo,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <AboutContainer>
      <Heading>About the Triangle Crokinole Club</Heading>
      <Paragraph>
        The Triangle Crokinole Club is dedicated to promoting the exciting game of crokinole in the Triangle area. Our club brings together players of all skill levels to enjoy friendly competition, improve skills, and celebrate the joy of this timeless game.
      </Paragraph>
      <ImageCarousel>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Crokinole Game ${index + 1}`}
            style={{ 
              opacity: index === currentImageIndex ? 1 : 0, 
              position: index === currentImageIndex ? 'relative' : 'absolute',
              objectFit: 'cover', /* Changed to cover for zoom effect */
              maxHeight: '100%', /* Maintain aspect ratio */
              maxWidth: '100%', /* Ensure it fits within the container */
              backgroundColor: image === logo ? 'white' : 'transparent'
            }}
          />
        ))}
      </ImageCarousel>
      <SubHeading>History of Crokinole</SubHeading>
      <Paragraph>
        Crokinole is a traditional Canadian board game that originated in the 1870s. It is believed to have been invented by Eckhardt Wettlaufer in Ontario, Canada. The game combines elements of shuffleboard, curling, and marbles, and has been enjoyed by generations of families and friends.
      </Paragraph>
      <Paragraph>
        While crokinole and carrom share similarities in gameplay, they have distinct origins. Carrom is a traditional game from the Indian subcontinent, played for centuries, whereas crokinole originated in Canada in the late 19th century.
      </Paragraph>
      <SubHeading id="testimonials">Testimonials</SubHeading>
      <Testimonial>
        "Crokinole is more than just a game; it's a way to bring people together and create lasting memories. Our club is proud to continue this tradition." - Joe Grimm
      </Testimonial>
      <Testimonial>
        "Joining the Triangle Crokinole Club has been a fantastic experience! I've met so many great people and improved my game." - Chinmay Talekar
      </Testimonial>
      <Testimonial>
        "As the official cheek checker, I can confidently say that this club is the best place to enjoy crokinole!" - Dean Singh
      </Testimonial>
      <Testimonial>
        "I've been playing crokinole for decades, and this club brings something unique - a perfect mix of competitive spirit and genuine friendship." - Joe Rafferty
      </Testimonial>
    </AboutContainer>
  );
};

export default AboutUs;
