import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { repoActions } from '../../actions'
import Home from './Home'
import Loading from '../../components/Loading'
import MockProvider from '../../shared/testHelpers/MockProvider'
import Snackbar from '../../components/Snackbar'

jest.mock('../../actions', () => ({
  repoActions: {
    getRepos: jest.fn(),
  },
  snackbarActions: {
    hideSnackbar: jest.fn(),
  },
}))

const MockedProviderWithHome = () => (
  <MockProvider>
    <Home />
    <Loading />
    <Snackbar />
  </MockProvider>
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
      payload: [
        {
          id: 1,
          owner: {
            login: '1',
          },
          name: 'abc',
        },
      ],
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
      payload: [
        {
          id: 1,
          owner: {
            login: '1',
          },
          name: 'abc',
        },
      ],
    })

    expect(queryByTestId('pagination')).toBeNull()
  })
  it('should show Pagination if there are enough results', async () => {
    const { getByText, getByTestId } = render(<MockedProviderWithHome />)

    repoActions.getRepos.mockImplementationOnce(() => ({
      type: 'SET_PAGINATION',
      payload: [
        {
          index: 1,
          url: '1234',
        },
      ],
    }))

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
  it('should show request time after a request', async () => {
    const { getByTestId } = render(<MockedProviderWithHome />)

    repoActions.getRepos.mockImplementationOnce(() => ({
      type: 'HIDE_LOADING',
      payload: 1,
    }))

    fireEvent.change(getByTestId('search-input'), {
      target: {
        value: '1234',
      },
    })

    await waitFor(() => getByTestId('request-time'))

    expect(getByTestId('request-time')).toBeDefined()
  })
  it('should show error snackbar', async () => {
    const { getByTestId } = render(<MockedProviderWithHome />)

    repoActions.getRepos.mockImplementationOnce(() => ({
      type: 'SHOW_SNACKBAR',
      payload: 1,
    }))

    fireEvent.change(getByTestId('search-input'), {
      target: {
        value: '1234',
      },
    })

    await waitFor(() => getByTestId('snackbar-error-icon'))

    expect(getByTestId('snackbar-error-icon')).toBeDefined()
  })
})
