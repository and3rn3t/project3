import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import Header from "./Components/Header/header";

import EventList from "./Components/EventList/EventList";
import Event from "./Components/Event/Event";
import "./App.css";

const rootUrl =
  "https://app.ticketmaster.com/discovery/v2/events.json";

const apiKey = "&apikey=Fbt32TPxBuKL7RiAXrlZacb7PK45Xg6L";
const postalCode = "?postalCode=61265";
const keyword = "&keyword=";
const radius = "&radius=50&unit=miles"
const testUrl =  rootUrl + postalCode + radius + keyword + apiKey;
// console.log(testUrl);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  async fetchEventInfo() {
    let results = await axios.get(testUrl);
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
