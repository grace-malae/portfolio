import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchTails } from '../actions'
import Header from './Header'
import Home from './Pages/Home'
import Work from './Pages/Work'
import AboutMe from './Pages/AboutMe'
import Contact from './Pages/Contact'

function App (props) {
  useEffect(() => {
    props.dispatch(fetchTails())
  }, [])

  return (
    <div className='relative'>
      <Header />
      <main>
        <Route exact path='/' component={Home} />
        <Route path='/work' component={Work} />
        <Route path='/aboutme' component={AboutMe} />
        <Route path='/contact' component={Contact} />
      </main>
    </div>
  )
}
const mapStateToProps = (globalState) => {
  return {
    tails: globalState.tails
  }
}

export default connect(mapStateToProps)(App)
