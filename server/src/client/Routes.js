
import React from 'react';
import App from './App';
// import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';
import LogInPage from './pages/LogInPage';

export default [
  {
    ...App,
    routes: [

      {

        ...HomePage,
        path: '/',
        exact: true

      },
      {
        ...UsersListPage,
        path: '/users'

      },
      {
        ...LogInPage,
        path: '/login'

      },

      {
        ...AdminsListPage,
        path: '/admins'

      },

      {
        ...NotFoundPage,
        // Leave at end as undesignated default
      }

    ]
  }
];





// () => {
//
//   return (
//     <div>
//       <Route exact path="/" component={Home} />
//       <Route path="/users" component={UsersList} />
//     </div>
  // );
// };
