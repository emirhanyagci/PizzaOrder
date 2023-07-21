import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

//TODO : ADD TOAST TO LOGIN/REGISTER
