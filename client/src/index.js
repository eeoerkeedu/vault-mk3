import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, DarkMode, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	config: {
		initialColorMode: DarkMode,
	},
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ChakraProvider theme={theme}>
		<App />
	</ChakraProvider>
);
