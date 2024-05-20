import Root from "../routes/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";

export const routes = [
  {
    element: <Root />,
    errorElement: <h1>Error Page</h1>,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/login",
    element: <Login />,
  },
];
