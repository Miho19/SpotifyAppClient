import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { unhandledRequests } from "./mswMocks/handlers.js";

const queryClient = new QueryClient();

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") return;

  const { worker } = await import("./mswMocks/browser.js");
  return worker.start({ onUnhandledRequest: unhandledRequests });
}

enableMocking().then(() =>
  ReactDOM.createRoot(document.getElementById("root")).render(root),
);

const root = (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0DOMAIN}
        clientId={import.meta.env.VITE_AUTH0CLIENTID}
        authorizationParams={{
          redirect_uri: window.location.origin,
          scope: "user-read-email user-read-private playlist-read-private",
        }}
      >
        <App />
      </Auth0Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
