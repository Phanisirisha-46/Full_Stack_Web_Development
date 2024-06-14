import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Users from './components/users/Users';
import Registereduser from './components/Registeredusers/Registereduser';
import Parent from './components/parent/Parent';
import Managetasks from './components/tasks/Managetasks';
import Userdetails from './components/user-details/Userdetails';
import Tech from './components/technologies/Tech';
import Java from './components/java/Java';
import Node from './components/node/Node';
import Vue from './components/vue/Vue';
import Userdash from './components/userdash/Userdash';
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
          path: 'users/:userId',  // ":" -  if we keep then we take as parameter the userid
          element: <Userdetails/>
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
        },
        {
          path: 'userdash',
          element: <Userdash />
        },
        {
          path: 'tech',
          element: <Tech />,
          children:[
            {
              path: 'java',
          element: <Java />
            },
            {
              path: 'node',
          element: <Node />
            },
            {
              path: 'vue',
          element: <Vue />
            }
          ]
        },
     
      ]
    }
  ]);

  return (
    <RouterProvider router={browserRouter} />

  );
}

export default App;