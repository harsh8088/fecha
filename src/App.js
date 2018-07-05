import React, { Component } from 'react';
import Home from './home.js';
import Chat from './chat.js';
import Match from './match.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {


  constructor(props) {
    super(props);
  }

  /* Executed when the props have changed and is not first render.
  Sometimes state depends on the props,hence whenever props changes the state should also be synced.
  This is the method where it should be done.*/
  componentWillReceiveProps() {

  }

  /* Executed only after the shouldComponentUpdate returns true. 
  This method is only used to do the preparation for the upcoming render, 
  similar to componentWillMount or constructor.*/
  componentWillMount() {

  }

  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }


  /* Executed when the new updated component has been updated in the DOM.*/
  componentDidMount() {
  

  }


  /* Executed just before the component gets removed from the DOM. */
  componentWillUnmount() {

  }
}

export default App;
