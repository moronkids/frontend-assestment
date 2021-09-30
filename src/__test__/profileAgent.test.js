import ProfileAgent1 from "components/agents/profile/parts/section_1";
import ProfileAgent2 from "components/agents/profile/parts/section_2";
import ProfileAgent3 from "components/agents/profile/parts/section_3";
import { render, screen } from "@testing-library/react";
//import { render, screen, waitForElementToBeRemoved } from "test/app-test-utils";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import '@testing-library/jest-dom'
import { Hooks } from "providers";
import { useState } from "react";

//test page "Profile Agent"

test("User can see the page of profile agent - rating", async () => {
    const Wrapper = () => {
        const queryClient = new QueryClient();
        const [id, setId] = useState("");
        return (
            <>
            <Hooks.Provider value={(setId)}>
               <QueryClientProvider client={queryClient}>
                   <ProfileAgent1 />
                   </QueryClientProvider> 
            </Hooks.Provider> 
            </>
        );
    };

    render(<Wrapper />);

    expect(
        screen.getByRole('heading', {
            name: /rating/i
        })

        
    ).toBeInTheDocument();
});

test("User can see the page of profile agent - layanan BRI", async () => {
    const Wrapper = () => {
        const queryClient = new QueryClient();
        const [id, setId] = useState("");
        return (
            <>
            <Hooks.Provider value={(setId)}>
               <QueryClientProvider client={queryClient}>
                   <ProfileAgent2 />
                   </QueryClientProvider> 
            </Hooks.Provider> 
            </>
        );
    };

    render(<Wrapper />);

    expect(
        screen.getByText(/layanan bri/i)
        
    ).toBeInTheDocument();
});



test("User can see the page of profile agent - jumlah saldo minimum", async () => {
    const Wrapper = () => {
        const queryClient = new QueryClient();
        const [id, setId] = useState("");
        return (
            <>
            <Hooks.Provider value={(setId)}>
               <QueryClientProvider client={queryClient}>
                   <ProfileAgent3 />
                   </QueryClientProvider> 
            </Hooks.Provider> 
            </>
        );
    };

    render(<Wrapper />);

    expect(
        screen.getByText(/Jumlah Saldo Minimum/i)
        
    ).toBeInTheDocument();
});

