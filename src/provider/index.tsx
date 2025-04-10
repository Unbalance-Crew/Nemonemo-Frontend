import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import Router from "@/components/router";

const queryClient = new QueryClient();

const Provider = () => {
    return (
        <QueryClientProvider client={ queryClient }>
                <Router />
                <ToastContainer />
        </QueryClientProvider>
    );
};

export default Provider;