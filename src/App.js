import React from 'react'
import "../src/App.css"
import Home from "../src/pages/Home"
import SearchPage from "../src/SearchPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <div className="App">

        <Router>

          <Switch>
            <Route path="/search">
              <SearchPage/>
            </Route>
            <Route path="/">
              {/* Home (the one with the search on) */}
              <Home />
            </Route>

        

          </Switch>




        </Router>


      </div>
    </>
  )
}

export default App;
