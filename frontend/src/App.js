import React from 'react'
import Feed from './screens/Feed'
import Login from './screens/Login'
import Register from './screens/Register'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Feed} />
                <Route path='/register' exact component={Register} />
                <Route path='/profile' exact component={Feed} />
                <Redirect from='*' to='login' />
            </Switch>
        </BrowserRouter>
    </div>
  )
}

export default App
