import React  from 'react';
import Alan from "./Components/Alan/Alan"
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import Header from "./Components/Header/Header"
import Error from "./Components/Error/Error"
import Home from "./Components/Home/Home"
import Welcome from "./Components/Welcome/Welcome"
import SearchInterface from "./Components/Search/SearchInterface"

const App =() => {
  return(

    <Router>
      <Switch>

        <Route path="/Alan">
          <Header backButton="/"/>
          <Alan/>
        </Route>

        <Route path="/News">
          <Header backButton="/"/>
          <SearchInterface/>
        </Route>

        <Route exact path="/">
          <Header/>
          <Welcome/>
        </Route>

        <Route path="/Error">
          <Header backButton="/"/>
          <Error/>
        </Route>

        <Route path="/Home">
          <Header/>
          <Home/>
        </Route>

        <Redirect to="/Error"/>
      </Switch>
    </Router>
  )
}

export default App;
