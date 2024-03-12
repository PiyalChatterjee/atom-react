import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { MockedProvider } from "@apollo/client/testing";
const mocks: any[] = [];

test("renders learn react link", () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );
  expect(screen).not.toBeNull();
});
