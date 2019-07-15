import React from 'react'
import {Route, IndexRedirect} from 'react-router'

import App from './App'
import Admin from './components/Admin'
import Dashboard from './components/Dashboard'
import Genre from './components/Genre'
// import Release from './components/Release'
// import NotFound from './components/NotFound'

export const routes = (
    <div>
        <Route path='/' component={App}>
            <Route path='/dashboard' component={Dashboard}/>
        </Route>
    < /div>
)