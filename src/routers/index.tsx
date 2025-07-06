import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Default from "../layouts/default";
import DashboardAdmin from "../layouts/dashboard/dashboard-admin";
import DashboardUsers from "../layouts/dashboard/dashboard-users";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Home from "../pages/Common/home";
import Event from "../pages/Common/event";
import EventDetail from "../pages/Common/event-detail";
import Payment from "../pages/Common/payment";
import Galery from "../pages/Common/galery";
import Guests from "../layouts/guests";
import RiwayatAdmin from "../pages/Dashboards/riwayat-admin";
import PaymentAdmin from "../pages/Dashboards/payment-admin";
const EventAdmin = React.lazy(() => import("../pages/Dashboards/Admin/event"));
const UsersAdmin = React.lazy(() => import("../pages/Dashboards/Admin/users"));
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
    path: "/dashboard/admin",
    element: <DashboardAdmin />,
    children: [
      {
        path: "events",
        element: <EventAdmin />,
      },
      {
        path: "users",
        element: <UsersAdmin />,
      },
      {
        path: "orders",
        element: <RiwayatAdmin />,
      },
      {
        path: "payment",
        element: <PaymentAdmin />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardUsers />,
    children: [
      {
        path: "orders",
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
