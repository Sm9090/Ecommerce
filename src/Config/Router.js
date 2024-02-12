import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, getUser } from "./firebase";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Home from "../Views/Home/Home";
import Signup from "../Views/Signup/Signup";
import Login from "../Views/Login/Login";
import UserProfile from "../Views/Profile/Profile"
import Cart from "../Views/Cart/Cart";
import Navbar from "../Components/Navbar/Navbar";
import Contactus from "../Views/Contact/Contactus";
import AddProduct from '../Views/Sell/sell'
import AllProductPage from "../Views/RenderProducts/AllProductPage";
import ProductDetail from "../Views/ProductDetail/ProductDetail";
import { removeUser,  setUser } from "../store/userSlice";
// import { useSelector } from "react-redux";
import { removeCart } from "../store/cartSlice";


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
                path: '/product/:adId/:adType',
                element: <ProductDetail />
            }
            
        ]

    },

])


function Layout() {

    const [userInfo, setUserInfo] = useState({})
    const [loading, setLoading] = useState(true)
    const [user, setUpUser] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                const userData = await getUser(uid)
                setUserInfo(userData)
                setLoading(false)
                setUpUser(user)
                dispatch(setUser(userData))
            } else {
                navigate('/login')
                setUserInfo({})
                setLoading(false)
                dispatch(removeUser(null))
                dispatch(removeCart([]))

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
            if (path === '/Contact' || path === '/Profile' || path === '/AddProduct') {
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