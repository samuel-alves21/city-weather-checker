import { createGlobalStyle } from 'styled-components'

export const MainStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  a {
    color: white;
    text-decoration: none;
  }


  :root {
    --std-responsive-param: 0.390625vw;
    --headlines-size: calc(50px + var(--std-responsive-param));
    --headline-padding: calc(2px + var(--std-responsive-param)) calc(30px + var(--std-responsive-param));

    --color-primary: #e05514;
    --color-secundary: #48484a;
    --color-secundary-light: #ada8a8;
    --color-secundary-lighter: #cecaca;

    font-size: calc(15px + var(--std-responsive-param));
  }

  body {
    font-family: 'Space Grotesk', sans-serif;
  }
`
