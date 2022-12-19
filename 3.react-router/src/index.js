import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import rootStore from "./store/index";
import Layout from "./components/UI/layout/layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={rootStore}>
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </Provider>
);
