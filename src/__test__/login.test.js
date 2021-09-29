import Forms from "components/login/parts/forms";
import { render, screen } from "@testing-library/react";
// import { userEvent, fireEvent } from "@testing-library/user-event";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
test("User can fill the form by input manual", async () => {
  const Wrapper = () => {
    // const [email, setEmail] = useState(null);
    // const [pass, setPass] = useState(null);
    const queryClient = new QueryClient();
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <Forms/>
        </QueryClientProvider>
      </>
    );
  };
  render(<Wrapper />);
  const username = "agent@rakamin.com";
  const password = "root";
  //test - case manual typing
  userEvent.type(screen.getByRole("textbox"), username);
  userEvent.type(screen.getByPlaceholderText(/password/i), password);
  userEvent.click(
    screen.getByRole("button", {
      name: /login/i,
    })
  );
  // expected result - when input manual
  expect(screen.getByRole("textbox").value).toBe(username);
  expect(screen.getByPlaceholderText(/password/i).value).toBe(password);
});
test("User can fill the form by props", async () => {
  const Wrapper = () => {
    // const [email, setEmail] = useState(null);
    // const [pass, setPass] = useState(null);
    const queryClient = new QueryClient();
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <Forms email={"agent@rakamin.com"} pass={"root"} />
        </QueryClientProvider>
      </>
    );
  };
  render(<Wrapper />);
  const username = "agent@rakamin.com";
  const password = "root";
  // expected result - when input automated from props
  expect(screen.getByRole("textbox").value).toBe(username);
  expect(screen.getByPlaceholderText(/password/i).value).toBe(password);
});
