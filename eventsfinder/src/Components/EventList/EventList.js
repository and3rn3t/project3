import React, { Component } from "react";
import "./EventList.css";
import { Link } from "react-router-dom";

class EventList extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    if (Object.keys(this.props.data)) {
      console.log(`props data ${this.props.data}`)
      console.log(this.props.data)
      console.log("props data keys" + Object.keys(this.props.data))
      //const eventsArray = this.props.events.map((value, index) => {
      //const eventsList = Object.keys(this.props.data);

      let eventsArray = this.props.data.map((value, index) => {
        console.log("value" + value)
        // console.log("value.images"+ value.images)
        //  console.log("value.images[0]"+ value.images[0])
        // console.log("value.images[0]"+ value.images[0])


        return (
          <div key={index}>
            <Link to={'/event/' + index} >
              <h2>{value.name}</h2>
            </Link>
            {<img src={value.images[0].url} alt=''/>    }
          </div>
        )
      }
      )
      
      return (
        <div>
          <h2>Event List Component</h2>
        
        </div>
      )


    }

  }
}

export default EventList;
