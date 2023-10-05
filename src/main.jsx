/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FixedLayout from './components/FixedLayout/FixedLayout';
import About from './components/About/About';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import router from './components/Route/Route';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <FixedLayout></FixedLayout>,

//     children: [
//       {
//         path:"/home",
//         element:<Home></Home>,
//       },
//       {
//         path: "/about",
//         element: <About></About>,
//       },
//       {
//         path:"/products",
//         element:<Products></Products>,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
