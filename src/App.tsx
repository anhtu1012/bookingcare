import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./page/home";
import Login from "./page/login";
import Dashboard from "./components/dashboard";
import ManageAccount from "./page/admin/manage-user";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "manage-user",
          element: <ManageAccount />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
