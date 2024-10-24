import "./App.css";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import ViewCart from "./Pages/ViewCart";
import Wishlist from "./Pages/Wishlist";
import { CartProvider } from "./components/Context/CartContext";
import { AuthProvider } from "./components/Context/UserAuthContext";
import { WishlistProvider } from "./components/Context/WishlistContext";
import Layout from "./components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OrderHistory from "./components/complex/OrderHistory";
import MyProfile from "./components/complex/MyProfile";
import Account from "./Pages/Account";
import Checkout from "./Pages/Checkout";
import { PlaceOrderMessage } from "./components/compound/PlaceOrderMessage";
import Product from "./Pages/Product";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CategoryProduct } from "./Pages/CategoryProduct";
import AllProducts from "./Pages/AllProducts";
import BrowseByCategoryProducts from "./Pages/BrowseByCategoryProducts";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Contact",
        element: <ContactUs />,
      },
      {
        path: "/Sign_Up",
        element: <SignUp />,
      },
      {
        path: "/About",
        element: <AboutUs />,
      },
      {
        path: "/Cart",
        element: <ViewCart />,
      },

      {
        path: "/Wishlist",
        element: <Wishlist />,
      },
      {
        path: "Cart/Checkout",
        element: <Checkout />,
      },
      {
        path: "Cart/Checkout/OrderMessage",
        element: <PlaceOrderMessage />,
      },
      {
        path: "/:ProductType/:Id",
        element: <Product />,
      },
      {
        path: "/categoryProducts/:category",
        element: <CategoryProduct />,
      },
      {
        path: "/BrowseByCategory/:category",
        element: <BrowseByCategoryProducts />,
      },
      {
        path: "/:section",
        element: <AllProducts />,
      },
      {
        path: "/MyAccount",
        element: <Account />,
        children: [
          {
            path: "Profile",
            element: <MyProfile />,
          },
          {
            path: "OrderHistory",
            element: <OrderHistory />,
          },
        ],
      },
    ],
  },
]);
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <RouterProvider router={router} />
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
