import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Feed from "./routes/Feed";
import Topbar from "./components/Topbar";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Topbar />

        <Switch>
          <Route exact path="/">
            <Feed />
          </Route>

          <Route path="/newuser">
            <h2>Olá novo usuário</h2>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
