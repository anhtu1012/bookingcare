import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./page/patient/home";
import Login from "./page/login";
import Dashboard from "./components/dashboard";
import ManageAccount from "./page/admin/manage-user";
import { ConfigProvider } from "antd";
import ManageTime from "./page/doctor/manage-time";
import ManageDoctorBlog from "./page/admin/manage-doctor";
import DoctorDetail from "./page/patient/doctor-detail";

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
        {
          path: "/doctor-detail/:doctorID",
          element: <DoctorDetail />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },

    {
      path: "/dashboard",
      element: (
        <ConfigProvider
          theme={{
            components: {
              Layout: {
                siderBg: "#001529",
              },
            },
          }}
        >
          <Dashboard />
        </ConfigProvider>
      ),
      children: [
        {
          path: "manage-user",
          element: <ManageAccount />,
        },
        {
          path: "manage-doctor-blog",
          element: <ManageDoctorBlog />,
        },
        {
          path: "manage-time",
          element: <ManageTime />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
