import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'

import App from './App'
import store from '../store'
import { fetchTails } from '../actions'

jest.mock('../actions')

fetchTails.mockImplementation(() => () => {})

test('page header includes tail', () => {
  render(<Provider store={store}><App /></Provider>)
  const heading = screen.getByRole('heading')
  expect(heading.innerHTML).toMatch(/Tail/)
})

test('renders an <li> for each tail', () => {
  const tails = ['orange', 'persimmons', 'kiwi tail']
  jest.spyOn(store, 'getState')
  store.getState.mockImplementation(() => ({ tails }))

  render(<Provider store={store}><App /></Provider>)
  const li = screen.getAllByRole('listitem')
  expect(li).toHaveLength(3)
})

test('dispatches fetchTails action', () => {
  render(<Provider store={store}><App /></Provider>)
  expect(fetchTails).toHaveBeenCalled()
})
