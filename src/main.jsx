import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Form from './components/Form';
import Users from './components/Users';
import Updata from './components/Updata';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/users",
        element: <Form/>,
      },
      {
        path: '/user',
        element: <Users/>,
        loader: () => fetch('http://localhost:5000/user')
      },
      {
        path: '/update/:id',
        element: <Updata/>,
        loader: ({params}) => fetch(`http://localhost:5000/user/${params.id}`)
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
