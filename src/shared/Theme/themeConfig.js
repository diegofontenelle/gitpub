export default {
  colors: {
    primary: {
      dark: '#141414',
      light: '#bfbfbf',
      main: '#262626',
    },
    secondary: {
      dark: '#fa8c16',
      light: '#ffc069',
      main: '#ffa940',
    },
    text: {
      light: '#bfbfbf',
      link: '#4a94e2',
      main: '#434343',
    },
  },
  fonts: ['Roboto'],
  fontSizes: {
    small: '1rem',
    medium: '1.25rem',
    large: '2rem',
  },
  spacing(times = 1) {
    const base = 8 / 10

    return `${base * times}rem`
  },
}
