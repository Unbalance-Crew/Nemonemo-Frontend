import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = (message: string, type: string): void => {
  switch (type) {
    case "SUCCESS":
      toast.success(message, { position:'top-right' });
      break;
    case "ERROR":
      toast.error(message, { position: 'top-right' });
      break;
    case "INFO":
      toast.info(message, { position: 'top-right' });
      break;

    default:
      toast(message, { position: 'top-right' });
      break;
  }
};

export default Toast;