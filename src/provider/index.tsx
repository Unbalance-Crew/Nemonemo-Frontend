import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import Router from "@/components/router";

const queryClient = new QueryClient();

const Provider = () => {
    return (
        <QueryClientProvider client={ queryClient }>
            <BrowserRouter>
                <Router />
                <ToastContainer />
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default Provider;