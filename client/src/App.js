import "./App.css";
import Home from "./components/home/home";

import Register from "./components/register-and-login/register/register";
import Login from "./components/register-and-login/login/login";
import Watchlist from "./components/watchlist/watchlist";
import Search from "./components/search/search";
import Recommended from "./components/recommended/recommended";
import Support from "./components/support/support";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useState} from "react";

function App() {

  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              (user && user._id) ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>

          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>

          <Route path="/register">
            <Register />
          </Route>        

          <Route path="/watchlist">
            <Watchlist />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/recommended">
            <Recommended />
          </Route>

          <Route path="/support">
            <Support />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
