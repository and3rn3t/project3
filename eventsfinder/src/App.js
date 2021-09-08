import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import Header from "./Components/Header/header";

import EventList from "./Components/EventList/EventList";
import Event from "./Components/Event/Event";
import "./App.css";

const rootUrl = "https://app.ticketmaster.com/discovery/v2/events.json";

const apiKey = "&apikey=Fbt32TPxBuKL7RiAXrlZacb7PK45Xg6L";
const postalCode = "?postalCode=61265";
const keyword = "&keyword=";
const radius = "&radius=50&unit=miles";
const apiUrl = rootUrl + postalCode + radius + keyword + apiKey;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  async fetchEventInfo() {
    let results = await axios.get(apiUrl);
    this.setState({ data: results.data._embedded.events });
  }

  async componentDidMount() {
    await this.fetchEventInfo();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="background">
          <Link to="/event/0">Link to Event 0</Link>
          <Link to="/event/1">Link to Event 1</Link>
          <Link to="/event/2">Link to Event 2</Link>
          <Link to="/event/3">Link to Event 3</Link>
          <Link to="/event/4">Link to Event 4</Link>
          <Link to="/event/5">Link to Event 5</Link>
          <Link to="/event/6">Link to Event 6</Link>
          <Route
            exact
            path="/"
            render={() => <EventList data={this.state.data} />}
          />
          <Route
            path="/event/:id"
            render={(props) => <Event {...props} data={this.state.data} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
