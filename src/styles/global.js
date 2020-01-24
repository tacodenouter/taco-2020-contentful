import { createGlobalStyle } from 'styled-components';
import '../styles/fonts.css';



const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    /* stylelint-disable-next-line */
    font: inherit;
    vertical-align: baseline;
  }

  /* Added to Fix Footer to bottom of viewport */
  html, body {
    height: 100%;
    background: #f1f0ea;
  }
  .siteRoot {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .siteContent {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }
  footer {
    width: 100%;
  }

  /* End Fix to Place Footer on Bottom of Viewport */

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  @media screen and (min-width: 35em) {
    html {
      margin-right: calc(-100vw + 100%);
      overflow-x: hidden;
    }
  }

  ol, ul, li {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    line-height: 1;
    font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    font-weight: 400;
    font-size: 1.2rem;
    font-family: 'Fabrikat-Regular', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  h1 {
    font-family: 'NeumaticCompressed-Bold', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 300;
    font-size: 5em;
    line-height: .8em;
    text-transform: uppercase;
  }

  h1.home {
    font-size: 12em;
    color: #ffb2e4;
    padding-bottom: .2em;
  }

  @media only screen and (max-width: 768px) {
    h1.home {
      font-size: 2em;
    }
  }

  h1.awesome {
    color: #ffb2e4;
    -webkit-animation: colorchange 20s infinite alternate;      
  }

  h3.home, p.home {
    padding-right: 20%;
  }

  @media screen and (max-width: 768px) {
    h3.home, p.home {
      padding-right: 0;
    }
  }

  @-webkit-keyframes colorchange {
    0% {
      color: #ffb2e4;
    }     
    25% {
      color: #5b8bf7;
    }
    50% { 
      color: #4c00ff;
    }
    100% { 
      color: #ffb2e4;
    }
  }

  h2 {
    font-family: 'Gopher-Medium';
    font-size: 3.2em;
    font-weight: 700;
  }

  h3 {
    font-family: 'Gopher-Medium';
    font-size: 1.6em;
    line-height: 1.3;
    font-weight: 700;
    padding-bottom: .7em;
  }

  h6 {
    font-size: 0.7em;
    text-transform: uppercase;
    letter-spacing: 0.09em;
  }

  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
    font-weight: 400;
    font-size: 1.1em;
  }

  p.center {
    text-align: center;
  }

  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  :not(pre) > code[class*="language-"] {
    font-size: 0.8em;
    font-family: 'Courier', 'Andale Mono', 'Ubuntu Mono', monospace;
    background: white !important;
    text-shadow: none;
  }

  button,
  input {
    font-family: inherit;
    font-size: inherit;
    background: none;
    border: none;
    outline: none;
    appearance: none;
    border-radius: 0;
    resize: none;
    &:focus {
      outline: none;
    }
    &:invalid {
      box-shadow: none;
    }
  }
`
export default GlobalStyle
