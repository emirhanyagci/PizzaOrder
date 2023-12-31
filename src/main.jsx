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
//todo: card same key bug
// todo : open modal for re auth user (using headles ui)
