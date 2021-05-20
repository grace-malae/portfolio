import { getTails } from '../apis/tails'

export const SET_TAILS = 'SET_TAILS'

export function setTails (tails) {
  return {
    type: SET_TAILS,
    tails
  }
}

export function fetchTails () {
  return dispatch => {
    return getTails()
      .then(tails => {
        dispatch(setTails(tails))
        return null
      })
  }
}
