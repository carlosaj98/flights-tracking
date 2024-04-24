import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"

import router from "./router.tsx"
import GlobalCSS from "./utils/GlobalCSS.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <GlobalCSS />
    <RouterProvider router={router} />
  </>
)
