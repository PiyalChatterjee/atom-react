import User from "../Users";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
const mocks: any[] = [];
describe("checking Users component on load", () => {
  it("rendering basic users component", () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <User />
      </MockedProvider>
    );
    expect(screen.getByText("Users")).toBeInTheDocument();
  });
});
