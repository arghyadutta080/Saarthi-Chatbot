import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import AuthState from "./context/AuthState";

const rootElement: any = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AuthState>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </AuthState>
  </React.StrictMode>
);
