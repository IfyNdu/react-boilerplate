import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './views/root/App'
import EditArticles from './views/edit-articles/edit-articles'


export default (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/edit" component={EditArticles} />
    </Switch>
  </BrowserRouter>
)
