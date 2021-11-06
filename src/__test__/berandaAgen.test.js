/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */
import DetailRequest from "components/dashboard/home/part/detailRequest";
import { render, screen } from "@testing-library/react";
//import { render, screen, waitForElementToBeRemoved } from "test/app-test-utils";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import { Hooks } from "providers";
import { useState } from "react";
test("User can see the page of beranda agent", async () => {
  const Wrapper = () => {
    const queryClient = new QueryClient();
    const [details, setDetails] = useState(false);
    const [id, setId] = useState("");
    return (
      <>
        <Hooks.Provider value={(setId, details, setDetails)}>
          <QueryClientProvider client={queryClient}>
            <DetailRequest />
          </QueryClientProvider>
        </Hooks.Provider>
      </>
    );
  };
  render(<Wrapper />);

  expect(
    screen.getByRole("heading", {
      name: /transaksi saat ini/i,
      hidden: true,
    })
  ).toBeInTheDocument();
});
test("User click button details", async () => {
  const Wrapper = () => {
    const queryClient = new QueryClient();
    const [details, setDetails] = useState(false);
    const [id, setId] = useState("");
    return (
      <>
        <Hooks.Provider value={(setId, details, setDetails)}>
          <QueryClientProvider client={queryClient}>
            <DetailRequest />
          </QueryClientProvider>
        </Hooks.Provider>
      </>
    );
  };
  await render(<Wrapper />);
  //   const { getByTestId } = Wrapper();
  //   console.log(screen.getByTestId("btn-details"));

  // screen.getByRole("img", { name: /logo\-wa/i });
  // await waitForElementToBeRemoved(() => screen.getByText(/1000000/i));

  //   await waitFor(() => {
  //     expect(screen.getByText(/0867861223271/i)).toBeInTheDocument()
  //   });
  // console.log(row)
  // screen.debug()
  //   console.log(screen.debug());
  //   console.log(within(row).getByTestId("btn-details"));
  //   userEvent.click(screen.getByTestId('btn-details'))

  // expect(
  //   container.querySelector(
  //     "#root > div:nth-child(2) > div:nth-child(5) > section > div:nth-child(1) > div > div"
  //   )
  // ).toBeInTheDocument()
  // container.querySelector('#root > div:nth-child(2) > div:nth-child(5) > section > div:nth-child(1) > div > div')
  //   expect(
  //     screen.getByRole("heading", {
  //       name: /transaksi saat ini/i,
  //       hidden: true,
  //     })
  //   ).toBeInTheDocument();
});
