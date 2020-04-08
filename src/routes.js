import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth'
import Dash from './Components/Dash'
import Form from './Components/Form'

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/dash' component={Dash} />
        <Route path='/add' component={Form} />
        <Route path='/edit/:id' component={Form} />
    </Switch>
)
