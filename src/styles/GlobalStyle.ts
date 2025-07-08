import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-bg: #111111;
    --color-gold: #FFD700;
    --color-text: #f5f5f5;
    --color-text-secondary: #b3b3b3;
    --font-main: 'Inter', 'Segoe UI', Arial, sans-serif;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    background: var(--color-bg);
    color: var(--color-text);
    font-family: var(--font-main);
    min-height: 100vh;
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  a {
    color: var(--color-gold);
    text-decoration: none;
    transition: color 0.2s;
  }
  a:hover {
    color: #fffbe6;
  }
`;

export default GlobalStyle; 