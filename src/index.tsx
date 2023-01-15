import React from "react";
import ReactDOM from "react-dom/client";
import App from "./view";

import "./global.scss";
import { DisplayProvider } from "./hooks/useDisplay";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DisplayProvider>
      <App />
    </DisplayProvider>
  </React.StrictMode>
);
