import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (error) => console.log(error)
    )
  }

  render() {

    return (
      <div>Latitude: {this.state.latitude}</div>
    )
  }
}

ReactDOM.render(
  <App />, 
  document.querySelector('#root')
);
