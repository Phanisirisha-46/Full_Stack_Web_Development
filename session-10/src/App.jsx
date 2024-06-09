import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Users from './components/users/Users';
import Registereduser from './components/Registeredusers/Registereduser';
import Parent from './components/parent/Parent';
import Managetasks from './components/tasks/Managetasks';

import './App.css';

function App() {
  // Create browser router object
  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        },
        {
          path: 'users',
          element: <Users />
        },
        {
          path: 'Registeredusers',
          element: <Registereduser />
        },
        {
          path: 'parent',
          element: <Parent />
        },
        {
          path: 'managetasks',
          element: <Managetasks />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={browserRouter} />

  );
}

export default App;