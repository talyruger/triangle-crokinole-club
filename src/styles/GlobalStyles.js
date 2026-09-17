import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: #f7f5f2;
    color: #555;
    line-height: 1.5;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', sans-serif;
    color: #3a3a3a;
    margin: 0.5rem 0;
  }

  a {
    text-decoration: none;
    color: #8a7040;
    transition: color 0.3s;

    &:hover {
      color: #6b5630;
      text-decoration: none;
    }
  }

  button {
    background-color: #c07a3a;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s, opacity 0.2s;

    &:hover {
      background-color: #a06830;
      opacity: 0.92;
    }
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
