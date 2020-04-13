import React from 'react'
import { Provider } from 'react-redux'
import { Container } from './App.style'
import Theme from './shared/Theme'
import store from './store'
import Loading from './components/Loading'
import Snackbar from './components/Snackbar'
import Router from './routes'

const App = () => (
  <Provider store={store}>
    <Theme>
      <Container data-testid="app">
        <Router />
      </Container>
      <Loading />
      <Snackbar />
    </Theme>
  </Provider>
)

export default App
