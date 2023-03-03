import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TreatContextProvider } from '../src/Context/treatContext'
import { AuthContextProvider } from '../src/Context/AuthContext'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <TreatContextProvider>
        <App />
      </TreatContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
