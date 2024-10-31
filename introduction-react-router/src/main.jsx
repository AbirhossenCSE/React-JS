
import React from "react"
import ReactDOM from "react-dom/client"
import App from './App.jsx'
import "./index.css"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello From react router</div>
  },
  {
    path: '/about',
    element: <div>I am in the about page</div>
  }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);