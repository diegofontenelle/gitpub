import React from 'react'
import { Provider } from 'react-redux'
import { Button, Container, Title } from './App.style'
import Theme from './shared/Theme'
import store from './store/store'
import Search from './components/Search/Search'

const App = ({ callback }) => {
  return (
    <Provider store={store}>
      <Theme>
        <Container data-testid="app">
          <Title>Live reload!</Title>
          <Button onClick={callback} data-testid="app-button">
            Click me
          </Button>
          <Search />
        </Container>
      </Theme>
    </Provider>
  )
}

export default App
