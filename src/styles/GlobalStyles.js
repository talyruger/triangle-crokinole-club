import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: #F5F5DC; /* Light beige background */
    color: #333; /* Dark gray for better readability */
    line-height: 1.4; /* Reduced line-height */
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', sans-serif;
    color: #f0c040; /* Golden yellow for headers */
    margin: 0.5rem 0; /* Reduced margin for headers */
  }

  a {
    text-decoration: none;
    color: #1A73E8; /* Blue for links */
    transition: color 0.3s;

    &:hover {
      color: #0056b3; /* Darker blue on hover */
      text-decoration: underline; /* Added underline on hover */
    }
  }

  button {
    background-color: #C72C41; /* Deep red for buttons */
    color: white; /* Ensure text is white for contrast */
    border: none;
    border-radius: 5px;
    padding: 0.4rem 0.8rem; /* Reduced padding for buttons */
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
      background-color: #A61A2D; /* Darker red on hover */
      transform: scale(1.05); /* Added scale effect on hover */
    }
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
