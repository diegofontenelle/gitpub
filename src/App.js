import React from 'react'
import { Provider } from 'react-redux'
import { Container } from './App.style'
import Theme from './shared/Theme'
import store from './store'
import Home from './pages/Home'
import Loading from './components/Loading'

const App = () => (
  <Provider store={store}>
    <Theme>
      <Container data-testid="app">
        <Home />
      </Container>
      <Loading />
    </Theme>
  </Provider>
)

export default App
