import React, { Component } from "react";
import "./App.scss";
import Main from "./components/MainComponent";
import { configStore } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    const store = configStore();

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="app">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
