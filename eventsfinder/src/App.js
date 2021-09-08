import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import EventList from "./Components/EventList/EventList";
import Event from "./Components/Event/Event";
import "./App.css";

const rootUrl = "https://app.ticketmaster.com/discovery/v2/events.json";

const apiKey = "&apikey=Fbt32TPxBuKL7RiAXrlZacb7PK45Xg6L";
const postalCode = "?postalCode=61265";
const keyword = "&keyword=";
const radius = "&radius=50&unit=miles";
const apiUrl = rootUrl + postalCode + radius + keyword + apiKey;
// console.log(apiUrl);

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
            <h3>AMT Awesome Events Finder</h3>
            <p>Check dev console, React Components (under EventList) for props from API</p>
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
    );
  }
}

export default App;
