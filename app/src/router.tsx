import { createBrowserRouter } from "react-router-dom"

import { HomePage, FlightsPage } from "./pages"

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
  {
    path: "/flights",
    element: <FlightsPage />,
  },
]

const router = createBrowserRouter(routes)

export default router
