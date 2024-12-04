import { toast } from "react-toastify"

function notify(type: "success" | "error", message: string) {
  if (type === "success") {
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
    })
  }

  if (type === "error") {
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
    })
  }
}

export default notify
