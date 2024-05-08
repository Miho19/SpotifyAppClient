import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return ({ children }) => {
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
  };
};

export { createWrapper };
