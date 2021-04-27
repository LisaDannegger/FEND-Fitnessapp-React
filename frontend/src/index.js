import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App";

//import { ApolloClient, InMemoryCache } from '@apollo/client';
//  const client = new ApolloClient({
//    uri: 'https://48p1r2roz4.sse.codesandbox.io',
//    cache: new InMemoryCache()
//});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
