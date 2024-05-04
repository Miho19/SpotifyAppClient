import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { SpotifyContextProvider } from "./context/SpotifyContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0DOMAIN}
      clientId={import.meta.env.VITE_AUTH0CLIENTID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        scope: "user-read-email user-read-private playlist-read-private",
      }}
    >
      <SpotifyContextProvider>
        <App />
      </SpotifyContextProvider>
    </Auth0Provider>
  </React.StrictMode>,
);
