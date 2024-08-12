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

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
