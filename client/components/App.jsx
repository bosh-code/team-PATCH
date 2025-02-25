import List from './List'
import Home from './Home'
import React from 'react'
import Details from './Details'
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/details/:name" component={Details}/>
      <Route exact path="/list" component={List}/>
    </div>
  )
}

export default App
