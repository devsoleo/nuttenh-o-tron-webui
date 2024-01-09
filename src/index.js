import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LanguageProvider } from './components/LanguageContext';

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);