import React, { useState, useEffect } from 'react'
import './App.css'
import Home from './screens/Home/Home'
import Bikes from './screens/Bikes/Bikes'
import BikeAdd from './screens/BikeAdd/BikeAdd'
import BikeEdit from './screens/BikeEdit/BikeEdit'
import BikeDetail from './screens/BikeDetail/BikeDetail'
import { Route, Switch, Redirect } from 'react-router-dom'
import { verifyUser } from './services/users'
import SignUp from './screens/SignUp/SignUp'
import SignIn from './screens/SignIn/SignIn'
import SignOut from './screens/SignOut/SignOut'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  const clearUser = () => setUser(null)

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>
        <Route path="/sign-out">
          <SignOut setUser={setUser} clearUser={clearUser} />
        </Route>
        <Route exact path="/bikes">
          <Bikes user={user} />
        </Route>
        <Route path="/:userID/add-bike">
          {user ?
            <BikeAdd user={user} />
            : <Redirect to="/sign-up" />}
        </Route>
        <Route exact path="/bikes/:id/edit">
          {user ?
            <BikeEdit user={user} />
            : <Redirect to='/' />}
        </Route>
        <Route exact path="/bikes/:id">
          <BikeDetail user={user} />
        </Route>
      </Switch>
    </div>
  )
}

export default App