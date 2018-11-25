import React from 'react'

import {Navbar, Friends} from './components'
import Routes from './routes'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <Friends />
    </div>
  )
}

export default App
