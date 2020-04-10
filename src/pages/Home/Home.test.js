import React from 'react'
import {
  render, fireEvent, waitFor,
} from '@testing-library/react'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from '../../reducers'
import { repoActions } from '../../actions'
import Home from './Home'
import Theme from '../../shared/Theme'
import Loading from '../../components/Loading'

jest.mock('../../actions', () => ({
  repoActions: {
    getRepos: jest.fn(),
  },
}))

const mockStore = createStore(reducer, applyMiddleware(thunk))

const MockedProviderWithHome = () => (
  <Provider store={mockStore}>
    <Theme>
      <Home />
      <Loading />
    </Theme>
  </Provider>
)

describe('<Home />', () => {
  beforeEach(() => jest.resetAllMocks())

  it('should show empty state if no query has been made', () => {
    const { getByText } = render(<MockedProviderWithHome />)

    expect(getByText('Start typing and let us do the rest')).toBeDefined()
  })
  it('should show RepoList if query found results', async () => {
    const { getByText, getByTestId } = render(<MockedProviderWithHome />)

    repoActions.getRepos.mockReturnValueOnce({
      type: 'GET_REPOS',
      payload: [{
        id: '1',
        owner: { login: '1' },
        name: 'abc',
      }],
    })

    fireEvent.change(getByTestId('search-input'), {
      target: {
        value: '1234',
      },
    })

    await waitFor(() => getByText('abc'))

    expect(getByText('abc')).toBeDefined()
  })
  it('should not show Pagination if there are not enough results', () => {
    const { queryByTestId } = render(<MockedProviderWithHome />)

    repoActions.getRepos.mockReturnValueOnce({
      type: 'GET_REPOS',
      payload: [{
        id: '1',
        owner: { login: '1' },
        name: 'abc',
      }],
    })

    expect(queryByTestId('pagination')).toBeNull()
  })
  it('should show Pagination if there are enough results', async () => {
    const { getByText, getByTestId } = render(<MockedProviderWithHome />)

    repoActions.getRepos.mockImplementationOnce(() => ({ type: 'SET_PAGINATION', payload: [{ index: 1, url: '1234' }] }))

    fireEvent.change(getByTestId('search-input'), {
      target: {
        value: '1234',
      },
    })

    await waitFor(() => getByText('abc'))

    await waitFor(() => getByTestId('pagination'))

    expect(getByTestId('pagination')).toBeDefined()
  })
  it('should show Loading while fetching data', async () => {
    const { getByText, getByTestId } = render(<MockedProviderWithHome />)

    repoActions.getRepos.mockImplementationOnce(() => ({
      type: 'SHOW_LOADING',
    }))

    fireEvent.change(getByTestId('search-input'), {
      target: {
        value: '1234',
      },
    })

    await waitFor(() => getByText(/Refreshing coffee and fetching data/))

    expect(getByTestId('loading-component')).toBeDefined()
  })
})
