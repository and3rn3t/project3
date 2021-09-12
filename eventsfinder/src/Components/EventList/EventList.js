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
        return (
          <div key={index}>
          <Link to={'/event/' + index} >
            <h2>{value.name}</h2>
          </Link>
          {<img src={value.images[0].url} alt='' />}

      


          
         
          {value.dates.start.dateTime + '   - '}    
           {value.name+ '   @ '}
           {value._embedded.venues[0].name}
          
         { 
 }

        </div>
        )
      }
      )
      return (
        <div>     
          {eventsArray}
        </div>
      )

    }

  }
}

export default EventList;
