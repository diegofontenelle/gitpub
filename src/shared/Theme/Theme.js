import React from 'react'
import { element, func, node, oneOfType } from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from './themeConfig'

const GlobalStyle = createGlobalStyle`
  html,
  body,
  main,
  #root {
    height: 100%;
    width: 100%;
  }

  html,
  body,
  div,
  header,
  section,
  main,
  footer,
  p,
  h1, h2, h3, h4, h5, h6,
  span,
  input,
  select,
  a,
  li {
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
  }
`

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

Theme.propTypes = {
  children: oneOfType([element, func, node]).isRequired,
}

export default Theme
