import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchTails } from '../actions'

function App (props) {
  useEffect(() => {
    props.dispatch(fetchTails())
  }, [])

  return (
    <>
      <div className='app'>
        <h1>Fullstack Boilerplate - with Tails!</h1>
        <ul>
          {props.tails.map(tail => (
            <li key={tail}>{tail}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    tails: globalState.tails
  }
}

export default connect(mapStateToProps)(App)
