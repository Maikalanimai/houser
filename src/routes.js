import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Wizard from './Components/Wizard/Wizard'
import Wizard2 from './Components/Wizard/Wizard2'
import Wizard3 from './Components/Wizard/Wizard3'

export default (
  <Switch>
    <Route exact path='/'>
      <Dashboard/>
    </Route>
    <Route path='/wizard/1'>
      <Wizard/>
    </Route>
    <Route path='/wizard/2'>
      <Wizard2/>
    </Route>
    <Route path='/wizard/3'>
      <Wizard3/>
    </Route>
  </Switch>
)