import "./App.css";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import ViewCart from "./Pages/ViewCart";
import { CartProvider } from "./components/Context/CartContext";

import Layout from "./components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    ],
  },
]);
function App() {
  return (
    <>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </>
  );
}

export default App;
