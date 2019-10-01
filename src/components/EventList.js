import React, { Component } from 'react';
import Event from '../src/Event';

state ={
  events:[],
}

class EventList extends Component {
  render() {
    return (
      <ul className="EventList">
        {this.state.events.map(event =>
          <li key={event.id}>
            <Event event={event} />
          </li>)}
      </ul>
    );
  }

export default EventList;