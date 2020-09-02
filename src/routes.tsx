import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import UserList from './pages/UserList';
import UserDetails from './pages/UserDetails';

const ManyUserLists = () => (
  <>
    <UserList />
    <UserList />
    <UserList />
  </>
);

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact element={<ManyUserLists />} />
      <Route path='/users/:id' element={<UserDetails />} />
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;
