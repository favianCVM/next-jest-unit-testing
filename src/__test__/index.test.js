import React from "react";
import { render, screen } from "../__mocks__/ProviderMock";
import ProviderMock from "../__mocks__/ProviderMock";
import Home from "../../pages/index";

// jest.mock('next/dynamic', () => () => {
//   const DynamicComponent = () => null;
//   DynamicComponent.displayName = 'LoadableComponent';
//   DynamicComponent.preload = jest.fn();
//   return DynamicComponent;
// });

test("Home Page", () => {
  render(<Home />);

  const heading = screen.getByRole("heading", {
    name: /welcome to next\.js!/i,
  });

  expect(heading).toBeInTheDocument();
});

// it('renders homepage unchanged', () => {
//   const tree = renderer.create(<Home />).toJSON()
//   expect(tree).toMatchSnapshot()
// })
