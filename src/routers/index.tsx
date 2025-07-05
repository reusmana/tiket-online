import React from "react";
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
import Galery from "../pages/Common/galery";
import Guests from "../layouts/guests";
const EventAdmin = React.lazy(() => import("../pages/Dashboards/Admin/event"));
const Users = React.lazy(() => import("../pages/Dashboards/Admin/users"));
const Riwayat = React.lazy(() => import("../pages/Dashboards/riwayat"));
const UpdateProfile = React.lazy(() => import("../pages/Dashboards/profile"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Guests />,
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
        path: "galery",
        element: <Galery />,
      },
    ],
  },
  {
    path: "/",
    element: <Default />,
    children: [
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
      {
        path: "events",
        element: <EventAdmin />,
      },
      {
        path: "users",
        element: <Users />,
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
