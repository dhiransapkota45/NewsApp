import React, { Component } from "react";
import NavBar from "./components/NavBar";
import NewsBar from "./components/NewsBar";
import { Switch, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <NewsBar
              key="general"
              pagesize={12}
              category="general"
              country="in"
            />
          </Route>
          <Route exact path="/business">
            <NewsBar
              key="business"
              pagesize={12}
              category="business"
              country="in"
            />
          </Route>
          <Route exact path="/entertainment">
            <NewsBar
              key="entertainment"
              pagesize={12}
              category="entertainment"
              country="in"
            />
          </Route>
          <Route exact path="/health">
            <NewsBar
              key="health"
              pagesize={12}
              category="health"
              country="in"
            />
          </Route>
          <Route exact path="/science">
            <NewsBar
              key="science"
              pagesize={12}
              category="science"
              country="in"
            />
          </Route>
          <Route exact path="/sports">
            <NewsBar
              key="sports"
              pagesize={12}
              category="sports"
              country="in"
            />
          </Route>
          <Route exact path="/technology">
            <NewsBar
              key="technology"
              pagesize={12}
              category="technology"
              country="in"
            />
          </Route>
        </Switch>
      </div>
    );
  }
}
