import { createBrowserRouter } from "react-router-dom";
import Home from '../page/Home'
import Cities from '../page/Cities'
import Login from '../page/Login'
import Layout from "../layouts/Layout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path:'/cities',
        element: <Cities/>
      },
    ]
  },
  {
    path:'/login',
    element: <Login/>
  }
])

export default router;