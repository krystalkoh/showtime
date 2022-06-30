import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./styles.css";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.render(<App />, document.getElementById("root"));
