import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import ConfirmationPage from './pages/ConfirmationPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/inscribirse",
    element: <RegistrationPage />,
  },
  {
    path: "/confirmacion",
    element: <ConfirmationPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
