import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.jsx";
import Login from "./components/Login/Login.jsx";
import Home from "./components/Home/Home.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <h1>Error Page</h1>,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

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
  const { broswerWorker } = await import("./msw/broswer.js");
  return broswerWorker.start();
}

enableMocking().then(() =>
  ReactDOM.createRoot(document.getElementById("root")).render(root),
);
