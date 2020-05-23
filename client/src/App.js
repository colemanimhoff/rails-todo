
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Completed from './pages/Completed'
import EditTodo from './pages/EditTodo'
import NewTodo from './pages/NewTodo'
import Todos from './pages/Todos'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Todos />
          </Route>
          <Route path="/completed">
            <Completed />
          </Route>
          <Route path="/new">
            <NewTodo />
          </Route>
          <Route exact path="/:id/edit">
            <EditTodo />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
