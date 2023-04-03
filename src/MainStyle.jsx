import { createGlobalStyle } from 'styled-components'
import { breakpoints } from './breakpoints'

let height = window.innerHeight

window.onresize = () => {
  height = window.innerHeight
}

export const MainStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::selection {
    color: #eb3700;
    background: #cecaca;
  }

  :root {
    --std-responsive-param: 0.390625vw;
    --headlines-size: calc(40px + var(--std-responsive-param));
    --headline-padding: calc(2px + var(--std-responsive-param)) calc(30px + var(--std-responsive-param));

    --height-full: ${height}px;

    --color-primary: #e05514;
    --color-secundary: #48484a;
    --color-secundary-light: #ada8a8;
    --color-secundary-lighter: #cecaca;
    
    font-size: calc(13px + var(--std-responsive-param));

    @media (max-width: ${breakpoints.smallScreen}) {
      font-size: calc(13px + var(--std-responsive-param));
    }
  }

  body {
    font-family: 'Space Grotesk', sans-serif;
  }

  a {
    color: white;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6, p {
    color: var(--color-secundary);
    text-align: center;
  }
`
