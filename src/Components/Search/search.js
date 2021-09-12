import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./Search.css";

import EventList from "../EventList/EventList";
import Event from "../Event/Event";

const something = "Fbt32TPxBuKL7RiAXrlZacb7PK45Xg6L";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      postalCode: undefined,
      city: undefined,
      keyword: undefined,
    };
  }

  // Takes changes made in Postal Code input field and sets state / runs axios API to generate results based on postal code
  onPstlChangeHandler = async (e) => {
    if (e.target.value.length === 5) {
      this.searchPstl(e.target.value);
      this.setState({ postalCode: e.target.value });
    }
  };

  searchPstl = async (postalCode) => {
    let results = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/events.json?postalCode=${postalCode}&apikey=${something}`
    );

    let events;
    if (results.data._embedded.events) {
      events = <EventList data={this.state.data} />;
      this.setState({ data: results.data._embedded.events });
    }
    return events;
  };

  render() {
    return (
      <div>
        <div className="search">
          <div>
            <form>
              
              <input
                type="text"
                value={this.state.postalCode}
                onChange={(e) => this.onPstlChangeHandler(e)}
                placeholder="Enter a ZIP/Postal Code"
                
              />
            </form>
          </div>
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

export default Search;
