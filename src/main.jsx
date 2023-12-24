import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main';
import Home from './pages/Home/Home';
import AuthProvider from './Provider/AuthProvider';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Deshboard from './pages/Deshboard/Deshboard/Deshboard';
import CreateTask from './pages/Deshboard/CreateTask/CreateTask';
import Profile from './pages/Deshboard/Profile/Profile';
import PrivateRoute from './Provider/PrivateRoute';
import PreviousTask from './pages/Deshboard/PreviousTask/PreviousTask';
import Feature from './pages/Feature/Feature';
import Dan from './pages/Deshboard/Dan/Dan';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      },
      {
        path:'/Feature',
        element:<Feature></Feature>
      }
    ]
  },
  {
    path:'deshboard',
    element:<PrivateRoute> <Deshboard></Deshboard></PrivateRoute>,
    children:[
      {
        path:'createTask',
        element:<CreateTask></CreateTask>
      },
      {
        path:'profile',
        element:<Profile></Profile>
      },
      {
        path:'previous-task',
        element:<PreviousTask></PreviousTask>
      },
     
      {
        path:'Dan',
        element:<Dan></Dan>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider> 
  </React.StrictMode>,
)
