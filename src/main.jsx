import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';
import Home from './Home/Home.jsx';
import Blog from './Blog/Blog.jsx';
import Shop from './Shop/Shop.jsx';
import SingleProduct from './Shop/SingleProduct.jsx';
import CartPage from './Shop/CartPage.jsx';
import Contact from './contactPage/Contact.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "/", element: <Home/>},
      {path: "/blog", element: <Blog/>},
      {path: "/shop", element: <Shop/>},
      {path: "/shop/:id", element: <SingleProduct/>},
      {path: "/cart-page", element: <CartPage/>},
      {path: "/contact", element: <Contact/>}
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
)
