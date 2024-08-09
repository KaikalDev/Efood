import { createGlobalStyle } from 'styled-components'

export const Cores = {
  Principal: '#E66767',
  Secundaria: '#FFF8F2'
}

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: "Roboto", sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
  }
  body {
    background-color: ${Cores.Secundaria};
  }
  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
