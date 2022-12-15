import React, { Component } from "react";
import MatchItem from "./match_item";
var matchList;
class Match extends Component {
  constructor(props) {
    super(props);
    // matchList=props.matchList;
    matchList = [
      {
        id: "ID_8001",
        category: "male",
        name: "Andrew Minds",
        match: "no",
        like: "no",
        thumbnail:
          "https://firebasestorage.googleapis.com/v0/b/fecha-b48d0.appspot.com/o/men.jpg?alt=media&token=5ebea1ae-5788-499a-8524-a0c6f2be9ad6",
      },
    ];
  }
  render() {
    return (
      <div className="home-container">
        <div className="card-container">
          <p style={{ marginBottom: "10px", fontSize: "12sp" }}>
            {" "}
            <b>Users you may have matched with</b>
          </p>
          <MatchItem matchList={matchList} />
        </div>
      </div>
    );
  }
}

export default Match;
