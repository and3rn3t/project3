import React, { Component } from "react";
import "./EventList.css";
import {Link} from "react-router-dom";

class EventList extends Component {
  render(){
    console.log(this.props.events)
    //const eventsArray = this.props.events.map((value, index) => {
      const eventsList = Object.keys(this.props.data);
      let eventsArray = eventsList.map((value, index) => {
        return (
            <div key={index}>
                <Link to={'/event/'+ index} >
                    <h2>{value.name}</h2>
                </Link>
                {/* <img src={value.images[0].url} alt=''/>   */}
            </div>
        )
    }
    )
    console.log(eventsArray)
    return (
        <div>
            {eventsArray}
        </div>
    )
}
}

export default EventList;
