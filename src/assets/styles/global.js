import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap');

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
    font-family: 'Montserrat', sans-serif !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input , button {
    color: #222;
    font-size: 14px;
  }

  @media only screen and (min-width: 1024px) {
    body, input , button {

    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    body, input , button {

    }
  }
  @media only screen and (max-width: 768px) {
    body, input , button {

    }
  }
`;
