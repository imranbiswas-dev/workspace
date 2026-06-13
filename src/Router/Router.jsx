import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Authentication/Login";
import SignUp from "./../Pages/Authentication/SignUp";
import AddJob from "../Pages/AddJob";

export const router = createBrowserRouter([
  {
    path: "/",

    Component: Layout,

    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signUp",
        Component: SignUp,
      },
      {
        path: "/add-job",
        Component: AddJob,
      },
    ],
  },
]);
