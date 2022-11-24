import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home/Home";

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
                element:<Category></Category>
            }
        ]
    }
]);

export default router;