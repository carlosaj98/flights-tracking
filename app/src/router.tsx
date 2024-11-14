import { createBrowserRouter } from "react-router-dom"

import { HomePage, FlightsPage, SingleFlightPage, AirportsPage } from "./pages"

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
    path: "/flight",
    element: <SingleFlightPage />,
  },
  {
    path: "/flights",
    element: <FlightsPage />,
  },
  {
    path: "/airports",
    element: <AirportsPage />,
  },

]

const router = createBrowserRouter(routes)

export default router
