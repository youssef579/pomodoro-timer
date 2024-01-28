import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// Main css file
import "./index.css";
// Fonts
import "@fontsource-variable/kumbh-sans";
import "@fontsource-variable/roboto-slab";
import "@fontsource/space-mono";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
