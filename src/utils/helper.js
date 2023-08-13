import { toast } from "react-toastify";

export function firebaseErrorCodeSplitter(code) {
  return code.slice(code.indexOf("/") + 1).replaceAll("-", " ");
}
//get firebase error and split to code and message
export function firebaseErrorConverter(error) {
  return {
    code: firebaseErrorCodeSplitter(error.code),
    message: error.message,
  };
}
const [SUCCESS, ERROR, WARN, INFO] = ["success", "error", "warn", "info"];
export function toastHandler(type, message) {
  switch (type) {
    case SUCCESS:
      return toast.success(message, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    case ERROR:
      return toast.error(message, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    case WARN:
      return toast.warn(message, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    case INFO:
      return toast.info(message, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
  }
}
export { SUCCESS, ERROR, WARN, INFO };
