import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --primary: #001542;
    --secundary: #FFB30D;
    --secundaryShadow: rgba(255, 179, 13, 0.7);
    --warning: #FF2D2D;
    --gray: #A6A6A6;
    --grayShadow: rgba(166, 166, 166, 0.25);
    --bg: #242B3A 
    --transparent: rgba(36, 43, 58, 0.15)
  }

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background-color: var(--bg);
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  main {
    padding: 64px 160px;
    min-height: 50vw;
  }

  a {
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyles;
