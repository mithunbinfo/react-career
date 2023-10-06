import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componrnts/Home/Home';
import Root from './componrnts/root/root';
import ErrorPage from './componrnts/ErrorPage/ErrorPage';
import Statics from './componrnts/Statics/Statics';
import AppliedJobs from './componrnts/AppliedJobs/AppliedJobs';
import Blogs from './componrnts/Blogs/Blogs';
import JobDetails from './componrnts/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json')
      },
      {
        path: "/statics",
        element: <Statics></Statics>
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('../jobs.json')
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
