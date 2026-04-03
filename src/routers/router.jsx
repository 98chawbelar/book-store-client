import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import CheckOut from "../pages/books/CheckOut";
import SingleBook from "../pages/books/SingleBook";
import { PrivateRoute } from "./PrivateRoute";
import OrderPage from "../pages/books/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageBooks from "../pages/dashboard/manageBooks/ManageBooks";
import UpdateBook from "../pages/dashboard/editBook/UpdateBook";
import AddBook from "../pages/dashboard/addBook/AddBooks";

const router = createBrowserRouter([
    {
    path: "/",
    element: <App />,
    children:[{
        path:'/',
        element:<Home />
    },
{
    path:'/orders',

    element:<PrivateRoute><OrderPage /></PrivateRoute>
},
{
    path: '/about',
    element: <div>About Page</div>
},{
    path:'/login',
    element:<Login />
},
{
    path:'/register',
    element:<Register />
},
{
    path:'/cart',
    element:<CartPage />
},
{
    path:'/checkout',
    element:<PrivateRoute >
        <CheckOut />
        </PrivateRoute >
},
{path:'/books/:id',
element: <SingleBook />}

]
},
{
path:"/admin",
element:<div><AdminLogin /></div>
},
{
    path:'/dashboard',
    element:<AdminRoute><div><DashboardLayout /></div></AdminRoute>,
    children:[{
        path:'',
        element:<AdminRoute><div><Dashboard /></div></AdminRoute>
    },
    {
        path:'add-new-book',
        element:<AdminRoute><div><AddBook /></div></AdminRoute>
    },
    {
        path:'edit-book/:id',
        element:<AdminRoute><div><UpdateBook /></div></AdminRoute>
    },
    {
        path:'manage-books',
        element:<AdminRoute><div><ManageBooks /></div></AdminRoute>
    },

]
}]);

export default router;