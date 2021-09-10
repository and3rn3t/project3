import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      postalCode: null,
      city: null,
      keyword: null,
      radius: null,
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.searchPstl}>
          <input
            type="text"
            value={this.state.postalCode}
            onChange={(e) => this.onPstlChangeHandler(e)}
            placeholder="Enter a ZIP/Postal Code"
          />
          <input type="submit" value="Submit" />
        </form>
        <form onSubmit={this.searchCity}>
          <input
            type="text"
            value={this.state.city}
            onChange={(e) => this.onCityChangeHandler(e)}
            placeholder="Enter a City"
          />
          <input type="submit" value="Submit" />
        </form>
        <form onSubmit={this.searchKeyword}>
          <input
            type="text"
            value={this.state.keyword}
            onChange={(e) => this.onKeywordChangeHandler(e)}
            placeholder="Enter a keyword"
          />
        </form>
        <input type="submit" value="Submit" />
      </div>
    );
  }
}

export default Search;
