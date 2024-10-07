import "./App.css";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";

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
        element: <div>Contact Page</div>,
      },
      {
        path: "/Sign_Up",
        element: <SignUp />,
      },
      {
        path: "/About",
        element: <AboutUs />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
