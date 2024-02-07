import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from "react-router-dom";
import Home from "../Views/Home/Home";
import Signup from "../Views/Signup/Signup";
import Login from "../Views/Login/Login";
import UserProfile from "../Views/Profile/Profile"
import Cart from "../Views/Cart/Cart";
import Navbar from "../Components/Navbar/Navbar";
import { onAuthStateChanged } from "firebase/auth";
import { auth, getUser } from "./firebase";
import { useEffect, useState } from "react";
import Contactus from "../Views/Contact/Contactus";
import AddProduct from '../Views/Sell/sell'
import AllProductPage from "../Views/RenderProducts/AllProductPage";
import ProductDetail from "../Views/ProductDetail/ProductDetail";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            }, {
                path: '/Home',
                element: <Home />
            }
            ,
            {
                path: '/Profile',
                element: <UserProfile />
            },
            {
                path: '/Cart',
                element: <Cart />
            },
            {
                path: '/Login',
                element: <Login />
            }, {
                path: '/Signup',
                element: <Signup />
            }, {
                path: '/Contact',
                element: <Contactus />
            },{
                path: '/AddProduct',
                element: <AddProduct />
            },{
                path: '/product-type/Mobiles',
                element: <AllProductPage  type={'Mobile'} />
            },{
                path: '/product-type/Laptops',
                element: <AllProductPage  type={'Laptop'} />
            },{
                path: '/product-type/Cameras',
                element: <AllProductPage  type={'Camera'} />
            },{
                path: '/product-type/Shoes',
                element: <AllProductPage  type={'Shoes'} />
            },{
                path: '/product/:adId/:adTitle',
                element: <ProductDetail />
            }
            
        ]

    },

])


function Layout() {

    const [userInfo, setUserInfo] = useState({})
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                const userData = await getUser(uid)
                console.log(userData)
                setUserInfo(userData)
                setLoading(false)
                setUser(user)
            } else {
                navigate('/login')
                setUserInfo({})
                setLoading(false)
            }
        }
        );
    }, [])


    useEffect(() => {
        const path = window.location.pathname
        if (user) {
            if (path === '/Login' || path === '/Signup') {
                navigate('/')
            }
        } else {
            if (path === '/Contact' || path === '/Profile' || path === '/Cart') {
                navigate('/Login')
            }
        }
    }, [window.location.pathname, user])


    if (loading) {
        return <div>loading..</div>
    }

    return (<>
        <Navbar userInfo={userInfo} />
        <Outlet />
    </>)
}


function RouterConfig() {
    return <RouterProvider router={router} />
}

export default RouterConfig 