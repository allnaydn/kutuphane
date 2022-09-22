import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import {useAuthContext} from './hooks/useAuthContext'

function App() {

  const {user,authIsReady}=useAuthContext();


  return (
    <div className='App'>
      {authIsReady && (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            {user && <Home />}
            {!user && <Redirect to="/login"/>}
          </Route>
          <Route path='/signup'>
            {!user && <Signup />}
            {user && <Redirect to="/"/>}
            {/* <Signup /> */}
          </Route>
          <Route path='/login'>
          {!user && <Login />}
          {user && <Redirect to="/"/>}

            {/* <Login /> */}
          </Route>
        </Switch>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App


