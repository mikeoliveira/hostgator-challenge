import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    /* transition: all 1s; */
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #F1F6FB;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input , button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  @media only screen and (min-width: 1024px) {
    body, input , button {
      color: red;
      font-size: 40px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    body, input , button {
      color: green;
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 768px) {
    body, input , button {
      color: blue;
      font-size: 10px;
    }
  }
`;
