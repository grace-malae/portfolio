import { SET_TAILS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAILS:
      return action.tails
    default:
      return state
  }
}

export default reducer
