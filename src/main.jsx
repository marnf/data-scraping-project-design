import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainPage from './Component/MainPage/MainPage.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayOut from './Component/LayOut/LayOut.jsx'
import TutorWiseAllPages from './Component/TutorWiseAllPages.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<LayOut />,
    children: [
      {
        path: "/",
        element: <TutorWiseAllPages />,
      }, 
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
