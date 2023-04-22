import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./Redux/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

   <Provider store={store} >
     <ChakraProvider theme={theme}>
       <App />
     </ChakraProvider>
   </Provider>

);
