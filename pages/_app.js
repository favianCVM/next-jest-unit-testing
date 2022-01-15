import "../styles/globals.css";
import { ThemeProvider, createTheme } from "@material-ui/core";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(() => {});

const theme = createTheme({});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
