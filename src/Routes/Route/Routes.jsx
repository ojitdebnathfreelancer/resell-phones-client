import { createBrowserRouter } from "react-router-dom";
import DeshboardLayout from "../../Layout/DeshboardLayout/DeshboardLayout/DeshboardLayout";
import MyBuyers from "../../Layout/DeshboardLayout/MyBuyers/MyBuyers";
import MyOrders from "../../Layout/DeshboardLayout/MyOrders/MyOrders";
import Main from "../../Layout/Main/Main";
import Category from "../../Pages/Category/Category/Category";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import SellerRoute from '../SellerRoute/SellerRoute';
import BuyerRoute from '../BuyerRoute/BuyerRoute';
import MyProducts from "../../Layout/DeshboardLayout/MyProducts/MyProducts";
import AddProduct from "../../Layout/DeshboardLayout/AddProduct/AddProduct";
import AllSellers from "../../Layout/DeshboardLayout/AllSellers/AllSellers";
import AllBuyers from "../../Layout/DeshboardLayout/AllBuyers/AllBuyers";
import ReportedItems from "../../Layout/DeshboardLayout/ReportedItems/ReportedItems";
import AdminRoute from "../AdminRoute/AdminRoute";
import Public from "../../Layout/DeshboardLayout/Public/Public";
import Blog from "../../Pages/Blog/Blog";
import Payment from "../../Layout/DeshboardLayout/MyOrders/Payment/Payment";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <PrivetRoute><Category></Category></PrivetRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    },
    {
        path: '/deshboard',
        element: <PrivetRoute><DeshboardLayout></DeshboardLayout></PrivetRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/deshboard',
                element:<Public></Public>
            },
            {
                path: '/deshboard/myorders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/deshboard/mybuyers',
                element: <SellerRoute><MyBuyers></MyBuyers></SellerRoute>
            },
            {
                path:'/deshboard/myproducts',
                element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path:'/deshboard/addproduct',
                element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path:'/deshboard/allsellers',
                element:<AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path:'/deshboard/allbuyers',
                element:<AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path:'/deshboard/reported',
                element:<AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
            {
                path:'/deshboard/payment/:id',
                loader: ({params})=> fetch(`http://localhost:5000/payment/${params.id}`),
                element:<Payment></Payment>
            }
        ]
    }
]);

export default router;