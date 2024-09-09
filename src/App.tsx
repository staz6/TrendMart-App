import "./App.css";
import Home from "./Pages/Home";
import Layout from "./components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Always display the layout with the header
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Contact",
        element: <div>Contact Page</div>, // Replace with actual component
      },
      {
        path: "/Sign_Up",
        element: <div>Sign Up Page</div>, // Replace with actual component
      },
      {
        path: "/About",
        element: <div>About Page</div>, // Replace with actual component
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
