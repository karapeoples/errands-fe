import React from 'react'
import { Route, Switch } from 'react-router';
import AdminRoute from '../auth/AdminRoute'
import LandingPage from '../../components/app/LandingPage'
import Login from '../../components/forms/Login'
import RegisterAdminForm from '../../components/forms/RegisterAdminForm'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/login' component={Login} />
      <Route path = '/registerAdmin' component={RegisterAdminForm} />
    </Switch>
  )
}

export default Routes
