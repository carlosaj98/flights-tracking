import { createBrowserRouter } from "react-router-dom"

import { HomePage } from "./pages"

interface routesInterface {
  path: string
  element: JSX.Element
  error?: JSX.Element
}

const routes: routesInterface[] = [
  {
    path: "/",
    element: <HomePage />,
  },
]

const router = createBrowserRouter(routes)

export default router
