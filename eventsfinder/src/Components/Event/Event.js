import React, { Component } from "react";
import "./Event.css";

class Event extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const id = this.props.match.params.id;
    const eventOnId = this.props.data[id];
    return (
      <div className="event">
        <div>
          <h1>{eventOnId.name}</h1>
        </div>
        <div>
          <h2>Event Information</h2>
          <p>
            Event Date/Time: {eventOnId.dates.start.localDate}{" "}
            {eventOnId.dates.start.localTime}
          </p>
        </div>
        <div>
          <p>Location: {eventOnId._embedded.venues[0].name}</p>
          {eventOnId._embedded.venues[0].address.line1}
          <br />
          {eventOnId._embedded.venues[0].city.name},{" "}
          {eventOnId._embedded.venues[0].state.stateCode}{" "}
          {eventOnId._embedded.venues[0].postalCode}
        </div>
        <div>
          <p>
            Price Range: ${eventOnId.priceRanges[0].min} to $
            {eventOnId.priceRanges[0].max}
          </p>
          <p>Ticket Purchase Limit: {eventOnId.accessibility.ticketLimit}</p>
          <br />
        </div>
        <div>
          <h3>Important Event Health/Safety Information</h3>
          <p>{eventOnId.info}</p>
          <p>Parking Detail: {eventOnId._embedded.venues[0].parkingDetail}</p>
        </div>
        <div>
          <form action={eventOnId.url} method="get" target="_blank">
            <button className="findTickets" type="submit">Find Tickets</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Event;
