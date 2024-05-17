import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

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

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") return;
  const { broswerWorker } = await import("./msw/broswer.js");
  return broswerWorker.start();
}

enableMocking().then(() =>
  ReactDOM.createRoot(document.getElementById("root")).render(root),
);
