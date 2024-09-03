import "./App.css";
import { Header } from "./components/complex/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
  {
    path: "/Contact",
    element: <Header />,
  },
  {
    path: "/Sign_Up",
    element: <Header />,
  },
  {
    path: "/About",
    element: <Header />,
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
