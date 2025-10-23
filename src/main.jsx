import { createRoot } from "react-dom/client";
import { BrowserRouter as Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <Route>
        <App />
    </Route>
);
