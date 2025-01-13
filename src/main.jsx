import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainPage from './Component/MainPage/MainPage.jsx'
import TutorWiseContactPage from '../src/Component/TutorWisePage/TutorWiseContactPage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayOut from './Component/LayOut/LayOut.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<LayOut />,
    children: [
      {
        path: "/",
        element: <TutorWiseContactPage />,
      }, 
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
