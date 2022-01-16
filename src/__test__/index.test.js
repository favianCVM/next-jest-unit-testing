import React from "react";
import { render, screen } from "../__mocks__/utils";
import Home from "../../pages/index";

jest.mock("next/dynamic", () => () => {
  const DynamicComponent = () => null;
  DynamicComponent.displayName = "LoadableComponent";
  DynamicComponent.preload = jest.fn();
  return DynamicComponent;
});

test("Home Page", () => {
  render(<Home />);

  const heading = screen.getByText("Welcome to Next.js!");

  console.log(heading);

  expect(heading).toBeInTheDocument();
});

// it('renders homepage unchanged', () => {
//   const tree = renderer.create(<Home />).toJSON()
//   expect(tree).toMatchSnapshot()
// })
