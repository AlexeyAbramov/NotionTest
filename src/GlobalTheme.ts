import { createGlobalStyle } from "styled-components";

export const theme = {
  defPadding: "2rem",
  defFont: "'Open Sans', sans-serif",

  colors: {
    font: "#252525",
    links: "#2aa2ff",
    main_bg: "#f0f0f0",
    main_bg_d: "#999999",
    second_bg: "#ffffff",
  },
};

export const GlobalStyle = createGlobalStyle`
  *, *:after, *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    color: ${theme.colors.font};
  }


  a {
    text-decoration: none;
    color: ${theme.colors.links};
  }
`;
