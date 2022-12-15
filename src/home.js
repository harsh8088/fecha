import React, { Component } from "react";
import like from "./ic_like.jpeg";
import dislike from "./ic_cancel.png";
import firebase from "./firebase.js";

var items;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      index: 0,
    };
  }
  render() {
    return (
      <div className="home-container">
        <div className="card-container">
          <NumberList item={items} />
          <div className="img-action-container">
            <img
              className="img-dislike"
              src={dislike}
              onClick={(e) => this.handleClick(false, e)}
            />
            <img
              className="img-like"
              src={like}
              onClick={(e) => this.handleClick(true, e)}
            />
          </div>
        </div>
      </div>
    );
  }

  handleClick(value, e) {
    console.log("Parameter", value);
    console.log("Event", e);

    const count = this.state.index;
    const newArray = Array.from(this.state.list);
    newArray[count].like = value;
    this.setState({
      list: newArray,
      index: count + 1,
    });
  }

  componentWillMount() {
    // const listRef = firebase.database().ref().child('list');
    // console.log(listRef.json());
    items = [
      {
        id: "ID_8001",
        category: "male",
        name: "Andrew Minds",
        match: "no",
        like: "no",
        thumbnail:
          "https://firebasestorage.googleapis.com/v0/b/fecha-b48d0.appspot.com/o/men.jpg?alt=media&token=5ebea1ae-5788-499a-8524-a0c6f2be9ad6",
      },
      {
        id: "ID_8002",
        category: "male",
        name: "Joshep Lint",
        match: "no",
        like: "yes",
        thumbnail:
          "https://firebasestorage.googleapis.com/v0/b/fecha-b48d0.appspot.com/o/men1.jpg?alt=media&token=982af801-0a17-4611-b4b2-9a4433ee27cb",
      },
      {
        id: "ID_8003",
        category: "female",
        name: "Kate Prine",
        match: "yes",
        like: "yes",
        thumbnail:
          "https://firebasestorage.googleapis.com/v0/b/fecha-b48d0.appspot.com/o/women.jpg?alt=media&token=f2b9d29a-e460-4acd-b9f1-36e4007ad797",
      },
      {
        id: "ID_8004",
        category: "female",
        name: "Angella Brings",
        ismatch: "no",
        like: "yes",
        thumbnail:
          "https://firebasestorage.googleapis.com/v0/b/fecha-b48d0.appspot.com/o/women1.jpg?alt=media&token=97cc9ba5-3a13-4d2f-941d-c5cc41867faf",
      },
    ];
    // listRef.on('value', function (snapshot) {
    //   console.log(snapshot.val());
    //   // updateStarCount(postElement, snapshot.val());
    // });
    // listRef.once('value', (snap) => {
    //   snap.forEach((child) => {
    //     items.push({
    //       category: child.val().category,
    //       thumbnail: child.val().thumbnail,
    //       like: child.val().like,
    //       name: child.val().name,
    //       match: child.val().match,
    //     });
    //   });
    // });
    this.setState({ list: items });
  }
}

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  // return <li>{props.value}</li>;
  return (
    <div>
      <img className="img-container" src={props.item.thumbnail} />
      <div className="img-name-container">
        <p>Name: {props.item.name}</p>
      </div>
    </div>
  );
}

function NumberList(props) {
  const items = props.item;
  const count = props.index;
  const listItem = items.slice(count, count + 1);
  return (
    <div>
      <img className="img-container" src={listItem.thumbnail} />
      <div className="img-name-container">
        <p>Name: {props.item.name}</p>
      </div>
    </div>
  );
}

export default Home;
