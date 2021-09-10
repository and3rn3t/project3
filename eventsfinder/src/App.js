import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Header from "./Components/Header/header";
import EventList from "./Components/EventList/EventList";
import Event from "./Components/Event/Event";

// const something = "Fbt32TPxBuKL7RiAXrlZacb7PK45Xg6L";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      postalCode: null,
      city: "",
      keyword: "",
    };
  }

  // Takes changes made in Postal Code input field and sets state / runs axios API to generate results based on postal code
  onPstlChangeHandler = async (e) => {
    // console.log(e.target.value);
    if (e.target.value.length === 5) {
      this.searchPstl(e.target.value);
      this.setState({ postalCode: e.target.value });
    }
  };

  searchPstl = async (postalCode) => {
    // console.log(postalCode);
    let results = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/events.json?postalCode=${postalCode}&apikey=Fbt32TPxBuKL7RiAXrlZacb7PK45Xg6L`
    );

    let events = <h1>No Events Found</h1>;
    if (results.data._embedded.events) {
      events = <EventList data={this.state.data} />;
      this.setState({ data: results.data._embedded.events });
    }
    return events;
  };

  // // Takes changes made in City input field and sets state / runs axios API to generate results based on city
  // onCityChangeHandler = async (e) => {
  //   this.searchCity(e.target.city);
  //   this.setState({ city: e.target.city });
  // };

  // searchCity = async (city) => {
  //   let results = await axios.get(
  //     `https://app.ticketmaster.com/discovery/v2/events.json?city=${city}&apikey=${something}`
  //   );
  //   this.setState({ data: results.data._embedded.events });
  // };

  // // Takes changes made in Keyword input field and sets state / runs axios API to generate results based on keyword
  // onKeywordChangeHandler = async (e) => {
  //   this.searchKeyword(e.target.keyword);
  //   this.setState({ keyword: e.target.keyword });
  // };

  // searchKeyword = async (keyword) => {
  //   let results = await axios.get(
  //     `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&apikey=${something}`
  //   );
  //   this.setState({ data: results.data._embedded.events });
  // };

  // async componentDidMount() {
  //   await this.fetchEventInfo();
  // }

  // Shows events if there are any, error if not
  // get renderEvents() {
  //   let events = <h1>No Events Found</h1>;
  //   if (this.state.data) {
  //     events = <EventList data={this.state.data} />;
  //   }
  //   return events;
  // }

  render() {
    return (
      <div>
        <Header />
        <div className="background">
          <div>
            <form>
              <input
                type="text"
                value={this.state.postalCode}
                onChange={(e) => this.onPstlChangeHandler(e)}
                placeholder="Enter a ZIP/Postal Code"
              />
              {/* <input
              type="text"
              value={this.state.city}
              onChange={(e) => this.onCityChangeHandler(e)}
              placeholder="Enter a City"
            />
            <input
              type="text"
              value={this.state.keyword}
              onChange={(e) => this.onKeywordChangeHandler(e)}
              placeholder="Enter a keyword"
            /> */}
            <button onClick="">Reset</button>
            </form>
            {this.renderEvents}
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

export default App;
