import React, { Component } from 'react';

class LandingFantasy extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-6 is-offset-3">
                            <h1 className="title">
                                {this.props.title}
                            </h1>
                            <div className="box">
                                <div className="field is-grouped">
                                    <p className="control is-expanded">
                                        <input className="input" type="text" placeholder="Enter your email" />
                                    </p>
                                    <p className="control">
                                        <a className="button is-info">
                                            Notify Me
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default LandingFantasy;