import React from 'react'
import { element, func, node, oneOfType } from 'prop-types'
import { ThemeProvider } from 'styled-components'
import theme from './themeConfig'

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

Theme.propTypes = {
  children: oneOfType([element, func, node]).isRequired,
}

export default Theme
