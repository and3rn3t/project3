import React, { Component } from "react";
import "./Event.css";

class Event extends Component {
  render() {
    const id = this.props.match.params.id;
    const eventOnId = this.props.data[id];
    return (
      <div>
        <div>
          <h1>{eventOnId.name}</h1>
        </div>
        <div>
          <h2>Event Information</h2>
          <p>Event Type: {eventOnId.classifications[0].genre.name}</p>
          <br />
          <p>
            Event Date/Time: {eventOnId.dates.start.localDate}{" "}
            {eventOnId.dates.start.localTime}
          </p>
          <br />
          <p>Location: {eventOnId._embedded.venues[0].name}</p>
          <br />
          {eventOnId._embedded.venues[0].address}
          <br />
          {eventOnId._embedded.venues[0].city},{" "}
          {eventOnId._embedded.venues[0].state.stateCode}{" "}
          {eventOnId._embedded.venues[0].postalCode}
          <br />
          <p>
            Price Range: {eventOnId.priceRanges[0].min} to{" "}
            {eventOnId.priceRanges[0].max}
          </p>
          <br />
          <p>Ticket Purchase Limit: {eventOnId.accessibility.ticketLimit}</p>
          <br />
          <p>Parking Detail: {eventOnId._embedded.venues[0].parkingDetail}</p>
        </div>
        <div>
          <h3>Important Event Health/Safety Information</h3>
          <p>{eventOnId.info}</p>
        </div>
        <div>
          <form action={eventOnId.url} method="get" target="_blank">
            <button type="submit">Find Tickets</button>
          </form>
          <br />
          <br />

          <a href={eventOnId.seatmap.staticUrl}>View Seat Map</a>
        </div>
      </div>
    );
  }
}

export default Event;
