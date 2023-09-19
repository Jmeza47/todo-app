import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Error from './error.tsx'
import "./style.css"
import ImportantTasks from './components/important.tsx'
import Home from './components/home/home'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "*",
                element: <Error />
            },
            {
                path: "/",
                element: <Home />
            },
            {
                path: "important",
                element: <ImportantTasks />
            }
        ]
    },




]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)