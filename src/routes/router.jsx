import Root from "../routes/Root";

import Home from "./Home";
import Login from "./Login";
import PartyPlaylist from "./PartyPlaylist";
import UserPlaylists from "./UserPlaylists";

export const routes = [
  {
    element: <Root />,
    errorElement: <h1>Error Page</h1>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/party", element: <PartyPlaylist /> },
      { path: "/playlist/:playlistID", element: <UserPlaylists /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];
