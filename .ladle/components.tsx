import type { GlobalProvider } from "@ladle/react";
import React from "react";
import { LadleErrorBoundary } from "./LadleErrorBoundary";
import "../src/styles.css";

export const Provider: GlobalProvider = ({ children }) => (
  <React.StrictMode>
    <LadleErrorBoundary>{children}</LadleErrorBoundary>
  </React.StrictMode>
);
