import Dashboard from "./Dashboard/Dashboard";
import React from 'react';
import Login from "./Login/Login";
import Searchitem from "./Searchitem/Searchitem";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Register from "./Register/Register";
import ProtectedRoute from './ProtectedRoute'
import { useState } from 'react'
import Bootstrap from './Bootstrap/Bootstrap'
import { useHistory } from 'react-router-dom'
import BillEntryAuditing from './BillEntryAuditing/BillEntryAuditing'
import Shortagebook from "./ShortageBook/Shortagebook";

function App() {

  const [Userdata, setUserdata] = useState({ user: { name: '', phone: '', password: '' } })
  // const [isAuth, setIsAuth] = useState(false)

  const signinhistory = useHistory();

  const loadUser = (data) => {

    setUserdata({
      user: {
        name: data.name,
        phone: data.phone,
        password: data.password,
      },
    });
  };

  function isAuthBySignIn(data) {

    console.log(data)

  }


  return (
    <div className='App'>
      <Router basename="https://kishan030.github.io/SNP/">
        <Switch>

          {/* <ProtectedRoute exact path='/' component={Dashboard} isAuth={isAuth} /> */}

          <Route exact path='/' >
            <Dashboard />
          </Route>

          <Route path='/searchitem' >
            <Searchitem />
          </Route>

          <Route path='/bootstrap' >
            <Bootstrap />
          </Route>

          <Route path='/signin'>
            <Login loadUser={loadUser} isAuthBySignIn={isAuthBySignIn} />
          </Route>

          <Route path='/register'>
            <Register loadUser={loadUser} />
          </Route>

          <Route path='/billentryauditing' >
            <BillEntryAuditing />
          </Route>

          <Route path='/shortagebook' >
            <Shortagebook />
          </Route>

        </Switch>
      </Router>
    </div>
  );

}

export default App;