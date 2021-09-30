import TransactionCustomer from "components/customers/home/parts/DetailTransaction";
import { render, screen } from "@testing-library/react";
//import { render, screen, waitForElementToBeRemoved } from "test/app-test-utils";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import '@testing-library/jest-dom'
import { Hooks } from "providers";
import { useState } from "react";

//test page "transaksi saat ini"

test("User can see the page of beranda customer", async () => {
    const Wrapper = () => {
        const queryClient = new QueryClient();
        const [details, setDetails] = useState(false);
        const [id, setId] = useState("");
        return (
            <>
            <Hooks.Provider value={(setId, details, setDetails)}>
               <QueryClientProvider client={queryClient}>
                   <TransactionCustomer />
                   </QueryClientProvider> 
            </Hooks.Provider> 
            </>
        );
    };

    render(<Wrapper />);

    expect(
        screen.getByRole('heading', {
            name: /transaksi saat ini/i,
            hidden: true
        })
    ).toBeInTheDocument();
});
