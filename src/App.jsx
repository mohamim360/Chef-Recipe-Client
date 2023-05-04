

import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './conponent/Layout';
import Login from './conponent/Login';
import Home from './conponent/Home';
import Register from './conponent/Register';
import NotFound from './conponent/NotFound';
import Blog from './conponent/Blog';
import ChefRecipe from './conponent/ChefRecipe';
import Detail from './conponent/Detail';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
          
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
          
        },
        {
          path: "/detail/:id",
          element: <Detail></Detail>,
          
        },
        {
          path: "/chefRecipe",
          element: <ChefRecipe></ChefRecipe>,
          
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ]
      
    }
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
