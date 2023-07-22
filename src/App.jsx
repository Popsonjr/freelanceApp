import React from 'react'
// import './App.css'
import "./app.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';
import Home from './pages/home/Home'
import Gig from './pages/gig/Gig'
import Add from './pages/add/Add'
import Gigs from './pages/Gigs/Gigs'
import Login from './pages/Login/Login'
import Message from './pages/Message/Message'
import Messages from './pages/Messages/Messages'
import MyGigs from './pages/MyGigs/MyGigs'
import Orders from './pages/Orders/Orders'
import Register from './pages/register/Register'

function App() {

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />

        },
        {
          path: "/gigs",
          element: <Gigs />

        },
        {
          path: "/gig/:id",
          element: <Gig />

        },
        {
          path: "/orders",
          element: <Orders />

        },
        {
          path: "/mygigs",
          element: <MyGigs />

        },
        {
          path: "/add",
          element: <Add />

        },
        {
          path: "/messages",
          element: <Messages/>

        },
        {
          path: "/message/:id",
          element: <Message />

        },
        {
          path: "/register",
          element: <Register />

        },
        {
          path: "/login",
          element: <Login />
        },
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
