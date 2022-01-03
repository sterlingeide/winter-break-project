import React, { Component } from 'react';
import './Landing.css';
import LandingComedy from './LandingComedy';

const showList = [
    {
        title: 'The Office'
    },
    {
        title: 'Parks and Recreation'
    },
    {
        title: 'Community'
    },
    {
        title: "It's Always Sunny in Philedelphia"
    },
]

const displayShowList = showList.map((c, idx) => {
    return (
        <LandingComedy
            key={idx} 
            title={c.title}
        />
    );
})


class Comedy extends Component {
    render() {
        return (
            <div>
                <section className="hero is-info is-fullheight">
                    <div className="hero-head">
                        <nav className="navbar">
                            <div className="container">
                                <div className="navbar-brand">
                                    <a className="navbar-item" href="../">
                                        <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo"/>
                                    </a>
                                    <span className="navbar-burger burger" data-target="navbarMenu">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </div>
                                <div id="navbarMenu" className="navbar-menu">
                                    <div className="navbar-end">
                                        <span className="navbar-item">
                                            <a className="button is-white is-outlined" href="/">
                                                <span className="icon">
                                                    <i className="fa fa-home"></i>
                                                </span>
                                                <span>Home</span>
                                            </a>
                                        </span>
                                        <span className="navbar-item">
                                            <a className="button is-white is-outlined" href="/about">
                                                <span className="icon">
                                                    <i className="fa fa-superpowers"></i>
                                                </span>
                                                <span>About</span>
                                            </a>
                                        </span>
                                        <span className="navbar-item">
                                            <a className="button is-white is-outlined" href="/characters">
                                                <span className="icon">
                                                    <i className="fa fa-book"></i>
                                                </span>
                                                <span>Characters</span>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    {displayShowList}
                </section>
            </div>
        );
    }
}

export default Comedy;