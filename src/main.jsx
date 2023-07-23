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

//TODO : ADD LOCALSTORAGE for login
//TODO : ADD spinner before of fetchs and route changes
//todo: CHANGE TO USER DRAWER AS DYNAMIC DATAS
//todo: CHECK FOR ROUTER ANIMATION
