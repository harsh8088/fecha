import React, { Component } from 'react';
var list;
class MatchItem extends Component {

    constructor(props) {
        super(props);
        list = this.props.matchList;
    }
    render() {
        return (
            <div>
                <p>{this.props.matchList.map((item) =>
                    <p className="round-border">{item.name}</p>
                   )}
                </p>
            </div>
        );
    }
}

export default MatchItem;