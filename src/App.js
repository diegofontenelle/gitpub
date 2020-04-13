import React from 'react'
import { Provider } from 'react-redux'
import { Container } from './App.style'
import Theme from './shared/Theme'
import store from './store'
import Loading from './components/Loading'
import Snackbar from './components/Snackbar'
import Router from './routes'
import ErrorBoundary from './components/ErrorBoundary'

const App = () => (
  <Provider store={store}>
    <Theme>
      <ErrorBoundary>
        <Container data-testid="app">
          <Router />
        </Container>
        <Loading />
        <Snackbar />
      </ErrorBoundary>
    </Theme>
  </Provider>
)

export default App
