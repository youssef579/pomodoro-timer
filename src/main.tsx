import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// css files
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
// Fonts
import "@fontsource-variable/kumbh-sans";
import "@fontsource-variable/roboto-slab";
import "@fontsource/space-mono";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
