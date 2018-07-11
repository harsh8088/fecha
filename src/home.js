import React, { Component } from 'react';
import like from './ic_like.jpeg';
import dislike from './ic_cancel.png';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="home-container">
                <div className="card-container">
                    <img className="img-container" src={"https://firebasestorage.googleapis.com/v0/b/fecha-b48d0.appspot.com/o/men.jpg?alt=media&token=5ebea1ae-5788-499a-8524-a0c6f2be9ad6"} />
                    <div className="img-name-container">
                    <p>Name: {this.props.list.name}</p>
                    </div>
                    <div className="img-action-container">
                        <img className="img-dislike" src={dislike} />
                        <img className="img-like" src={like} />
                    </div>
                </div>
            </div>
        );
    }
}


export default Home;