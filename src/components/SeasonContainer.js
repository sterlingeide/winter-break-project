import React, { Component } from 'react';
import axios from 'axios';
import Season from './Season';

class SeasonContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount(){
        axios.get('http://localhost:3000/seasons')
        .then((response) => {
            console.log('1st data', response.data);
            this.setState({
                data: response.data.seasonArray
            });
            console.log('data from api', this.state.data[0].title)
        })
        .catch((error) => {
            console.log('ERROR getting data response', error);
        })
    }

    displaySeasons() {
        const display = this.state.data.map((a, idx) => {
            return <Season
            key={idx}
            title={a.title}
            synopsis={a.synopsis}
            url={a.url}
            imageUrl={a.image_url}
          />
        });

        return display;
    }

    render() {
        return (
            <div>
                <h1>
                    Hello, this is seasons
                </h1>
                
                {this.displaySeasons()}
                
            </div>
        );
    }
}

export default SeasonContainer;