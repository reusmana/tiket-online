import { createHashRouter } from "react-router-dom";
import Default from "../layouts/default";
import Dashboard from "../layouts/dashboard";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Home from "../pages/Common/home";
import DashboardPage from "../pages/Dashboards";
import Event from "../pages/Common/event";
import EventDetail from "../pages/Common/event-detail";
import Payment from "../pages/Common/payment";

const router = createHashRouter([
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
