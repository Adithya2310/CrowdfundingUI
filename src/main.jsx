import React from "react";
import ReactDOM  from "react-dom/client";
import {ThirdwebProvider,ChainId} from "@thirdweb-dev/react";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
    <Router>
        <App />
    </Router>
    </ThirdwebProvider>
)