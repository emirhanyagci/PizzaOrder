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

//TODO : ADD spinner before of fetchs and route changes
//todo: CHECK FOR ROUTER ANIMATION
// todo : add toast favorite  and wallet procces
// todo : style scrolls
