import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"

import router from "./router.tsx"
import GlobalCSS from "./utils/GlobalCSS.tsx"
import "animate.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <GlobalCSS />
    <RouterProvider router={router} />
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
      theme="colored"
    />
  </>
)
