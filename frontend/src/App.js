import React from 'react'
import Feed from './screens/Feed'
import Login from './screens/Login'
import Register from './screens/Register'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3003'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/register' exact component={Register} />
                <Route path='/profile' exact component={Feed} />
                <Redirect from='*' to='/' />
            </Switch>
        </BrowserRouter>
    </div>
  )
}

export default App
