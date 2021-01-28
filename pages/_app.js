import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json';
//variavel = db 

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = db.theme;
/* subsituimos esta parte pela variavel db que está na raiz do projeto
{
  colors: {
    primary: '#0070f3',
  },
}
*/
export default function App({ Component, pageProps }) {
  return (
    <>
     
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
