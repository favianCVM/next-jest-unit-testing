import React from "react";
import { Provider } from "react-redux";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";

import { ThemeProvider, createTheme } from "@material-ui/core";
import reducer from "../../store/reducer";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
// import { RouterContext } from "next/dist/shared/lib/router-context";

const theme = createTheme({});

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <MemoryRouterProvider>
        <ThemeProvider theme={theme}>
          <Provider store={store}>{children}</Provider>
        </ThemeProvider>
      </MemoryRouterProvider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
