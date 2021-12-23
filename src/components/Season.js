import React, { Component } from 'react';

class Season extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>
                    Title: {this.props.title}
                    <br/>
                    Synopsis: {this.props.synopsis}
                </h3>
            </div>
        );
    }
}


export default Season;