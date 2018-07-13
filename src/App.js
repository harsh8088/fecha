import React, { Component } from 'react';
import Home from './home.js';
import Chat from './chat.js';
import Match from './match.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import firebase from './firebase.js';
import NavHeader from './nav_header.js';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      list: {}
    }

  }

  /* Executed when the props have changed and is not first render.
  Sometimes state depends on the props,hence whenever props changes the state should also be synced.
  This is the method where it should be done. */
  componentWillReceiveProps() {

  }

  /* Executed only after the shouldComponentUpdate returns true. 
  This method is only used to do the preparation for the upcoming render, 
  similar to componentWillMount or constructor. */
  componentWillMount() {

  }

  render() {
    return (
      // <div>
      //   {/* <Home list={this.state.list} /> */}
      //   <Match matchList={this.state.list} />
      // </div>
      <Router>
        <div >
          <NavHeader/>
          <Route exact path="/" component={Home} />
          <Route path="/match" component={Match} />
          <Route path="/chat" component={Chat} />
        </div>
      </Router>
    );
  }


  /* Executed when the new updated component has been updated in the DOM. */
  componentDidMount() {
    const listRef = firebase.database().ref().child('list');
    console.log(listRef);
    var items = [
      {
        "id": "ID_8001",
        "category": "male",
        "name": "Andrew Minds",
        "match": "no",
        "like": "no",
        "thumbnail": "https://firebasestorage.googleapis.com/v0/b/fecha-b48d0.appspot.com/o/men.jpg?alt=media&token=5ebea1ae-5788-499a-8524-a0c6f2be9ad6"
      },
      {
        "id": "ID_8002",
        "category": "male",
        "name": "Joshep Lint",
        "match": "no",
        "like": "yes",
        "thumbnail": "https://firebasestorage.googleapis.com/v0/b/fecha-b48d0.appspot.com/o/men1.jpg?alt=media&token=982af801-0a17-4611-b4b2-9a4433ee27cb"
      },
      {
        "id": "ID_8003",
        "category": "female",
        "name": "Kate Prine",
        "match": "yes",
        "like": "yes",
        "thumbnail": "https://firebasestorage.googleapis.com/v0/b/fecha-b48d0.appspot.com/o/women.jpg?alt=media&token=f2b9d29a-e460-4acd-b9f1-36e4007ad797"
      },
      {
        "id": "ID_8004",
        "category": "female",
        "name": "Angella Brings",
        "ismatch": "no",
        "like": "yes",
        "thumbnail": "https://firebasestorage.googleapis.com/v0/b/fecha-b48d0.appspot.com/o/women1.jpg?alt=media&token=97cc9ba5-3a13-4d2f-941d-c5cc41867faf"
      }
    ];
    listRef.on('value', function (snapshot) {
      console.log(snapshot.val());
      // updateStarCount(postElement, snapshot.val());
    });
    listRef.once('value', (snap) => {
      snap.forEach((child) => {
        items.push({
          category: child.val().category,
          thumbnail: child.val().thumbnail,
          like: child.val().like,
          name: child.val().name,
          match: child.val().match,
        });
      });
    });
    this.setState({ list: items })
  }


  /* Executed just before the component gets removed from the DOM. */
  componentWillUnmount() {

  }
}

export default App;
