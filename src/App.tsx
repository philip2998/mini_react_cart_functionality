import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Provider } from "react-redux";

import store from "./stores/store";
import React from "react";
import Cart from "./components/Cart";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Mini React Cart</h1>
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
