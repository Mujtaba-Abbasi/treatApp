import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {TreatContextProvider} from '../src/Context/treatContext'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TreatContextProvider>
      <App />
    </TreatContextProvider>
  </React.StrictMode>
);
