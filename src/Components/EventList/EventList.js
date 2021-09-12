import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./EventList.css";

class EventList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (Object.keys(this.props.data)) {
      // console.log(`props data ${this.props.data}`);
      // console.log(this.props.data);
      // console.log("props data keys" + Object.keys(this.props.data));
      // const eventsArray = this.props.events.map((value, index) => {
      // const eventsList = Object.keys(this.props.data);

      let eventsArray = this.props.data.map((value, index) => {
        console.log("value" + value);
        return (
          <div className="eventItem" key={index}>
            <br />
            <Link to={"/event/" + index}>
              <h2>{value.name}</h2>
            </Link>
            {<img src={value.images[0].url} alt="" />}
            <br />
            <br />
            {value.dates.start.localDate +
              " " +
              value.dates.start.localTime +
              "   - "}
            {value.name + "   @ "}
            {value._embedded.venues[0].name}
          </div>
        );
      });
      return <div>{eventsArray}</div>;
    }
  }
}

export default EventList;
