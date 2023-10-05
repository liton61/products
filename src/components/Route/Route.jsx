import { createBrowserRouter } from "react-router-dom";
import FixedLayout from "../FixedLayout/FixedLayout";
import Home from "../Home/Home";
import About from "../About/About";
import Products from "../Products/Products";
import Dashboard from "../Dashboard/Dashboard";
import Product from "../Product/Product";

const router = createBrowserRouter([
    {
        path: "/",
        element: <FixedLayout></FixedLayout>,

        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/products",
                element: <Products></Products>,
                loader: () => fetch(`https://dummyjson.com/products`)
            },
            {
                path:"/products/:id",
                element:<Product></Product>,
                loader: () => fetch(`https://dummyjson.com/products/${id}`)
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            }
        ],
    },
])
export default router;