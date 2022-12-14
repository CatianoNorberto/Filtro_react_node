import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #F0F1F7;
;
    color: #312e38;
    -webkit-font-smoothing: antialiased;
    scrollbar-width: thin;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }

  body #root{
    /* height: 100%; */
     /* Hide scrollbar for IE, Edge and Firefox */
     -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
      display: none;
    }
  }

  body, input, button, textarea {
    font: 500 1rem 'Roboto', sans-serif;
    color: #312e38;
  }
`;
