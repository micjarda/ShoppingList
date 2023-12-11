import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
//Provider
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Mock from "./components/wraps/mock.tsx";
// Styly
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <Mock>
          <App />
        </Mock>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
);
