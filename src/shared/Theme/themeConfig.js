export default {
  colors: {
    primary: {
      dark: '#141414',
      light: '#434343',
      main: '#262626',
    },
    secondary: {
      dark: '#fa8c16',
      light: '#ffc069',
      main: '#ffa940',
    },
    text: {
      primary: '#434343',
      secondary: '#595959',
    },
  },
  fonts: ['Roboto'],
  fontSizes: {
    small: '1rem',
    medium: '2rem',
    large: '3rem',
  },
  spacing(times = 1) {
    const base = 8 / 10

    return `${base * times}rem`
  },
}
