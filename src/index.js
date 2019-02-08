import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
class App extends Component {
  state = {
      latitude: null,
      errorMessage: ''
    }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    )
  }

  render() {
    return (
      <div>
        {(!this.state.latitude && this.state.errorMessage) &&
          <div>Error: {this.state.errorMessage}</div>
        }

        {(!this.state.errorMessage && this.state.latitude) && 
          <div><SeasonDisplay latitude={this.state.latitude}/></div>
        }
          
        {(!this.state.latitude && !this.state.errorMessage) && <div>
          <div class="ui active dimmer">
            <div class="ui text loader">Loading...</div>
          </div>
        </div>}
      </div>
    )
  }
}

ReactDOM.render(
  <App />, 
  document.querySelector('#root')
);
