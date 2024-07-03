import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes/router.jsx";

import queryClient from "./utilities/queryClient.js";

const router = createBrowserRouter(routes);

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
        <RouterProvider router={router} />
      </Auth0Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") return;
  return;
  const { broswerWorker } = await import("./msw/broswer.js");
  return broswerWorker.start();
}

enableMocking().then(() =>
  ReactDOM.createRoot(document.getElementById("root")).render(root),
);
