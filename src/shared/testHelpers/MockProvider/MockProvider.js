import React from 'react'
import { element, func, node, object, oneOfType } from 'prop-types'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Theme from '../../Theme'
import reducer from '../../../reducers'

const mockStore = createStore(reducer, applyMiddleware(thunk))

const MockProvider = ({ children }) => (
  <Provider store={mockStore}>
    <Theme>{children}</Theme>
  </Provider>
)

MockProvider.propTypes = {
  children: oneOfType([element, func, node, object]).isRequired,
}

export default MockProvider
