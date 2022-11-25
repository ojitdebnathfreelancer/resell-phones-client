import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Category from "../Pages/Category/Category/Category";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>, 
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/category/:id',
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`),
                element:<PrivetRoute><Category></Category></PrivetRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            }
        ]
    }
]);

export default router;