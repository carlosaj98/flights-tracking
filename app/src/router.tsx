import { createBrowserRouter } from "react-router-dom"
import App from "./App"

interface routesInterface {
  path: string
  element: JSX.Element
  error?: JSX.Element
}

const routes: routesInterface[] = [
  {
    path: "/",
    element: <App />,
  },
]

const router = createBrowserRouter(routes)

export default router