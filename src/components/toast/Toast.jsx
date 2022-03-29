import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toast({ message, type }) {
  return toast(message, {
    position: "bottom-right",
    autoClose: 5000,
    type: type,
    transition: Slide,
    closeOnClick: true,
    pauseOnHover: false,
    theme: "colored",
  });
}
