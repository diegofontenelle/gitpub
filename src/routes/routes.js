import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import RepoDetails from '../pages/RepoDetails'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/repos/:owner/:repo/details" exact>
        <RepoDetails />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Router
