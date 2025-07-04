import { createBrowserRouter } from "react-router-dom";
import Default from "../layouts/default";
import Dashboard from "../layouts/dashboard";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Home from "../pages/Common/home";
import DashboardPage from "../pages/Dashboards";
import Event from "../pages/Common/event";
import EventDetail from "../pages/Common/event-detail";
import Payment from "../pages/Common/payment";
import EventAdmin from "../pages/Dashboards/Admin/event";
import Riwayat from "../pages/Dashboards/riwayat";
import Galery from "../pages/Common/galery";
import UpdateProfile from "../pages/Dashboards/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "event",
        element: <Event />,
      },
      {
        path: "event/:slug",
        element: <EventDetail />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "galery",
        element: <Galery />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
      {
        path: "events",
        element: <EventAdmin />,
      },
      {
        path: "riwayat",
        element: <Riwayat />,
      },
      {
        path: "profile",
        element: <UpdateProfile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
