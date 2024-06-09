import React from 'react';
import './App.css';
import RootLayout from './RootLayout';
import Adduser from './components/adduser/Adduser';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Userlist from './components/userlists/Userlist';
function App() {
  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element:<RootLayout/>,
      children: [
        {

          path: 'adduser',
          element: <Adduser />,
        },
        {
          path: 'userlist',
          element: <Userlist />,
        },
      ]
    }
  ]);
   
  return (
    <RouterProvider router={browserRouter} />

  );
}

export default App