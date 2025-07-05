import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { UserProvider } from "./context/user.context.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </UserProvider>
  </StrictMode>
);
