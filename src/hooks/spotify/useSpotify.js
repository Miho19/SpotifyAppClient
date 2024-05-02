import { useAuth0 } from "@auth0/auth0-react";

async function useSpotify() {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  return { user, isAuthenticated, isLoading };
}

export { useSpotify };
