import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';

const scaleName = {
    c: 'celcius',
    f: 'farenhite'
}

class TempratureInput extends Component {
    state = {
        temprature: ''
    }

    handleChange = (e) => {
        this.setState({
            temperature: e.target.value
        });
    }

    render() {
        return(
            <fieldset>
                <legend>Enter temperature in {scaleName[this.props.scale]}:</legend>
                <input
                value={this.state.temperature}
                onChange={this.handleChange} />
                <BoilingVerdict celsius={this.state.temperature}/>
            </fieldset>
        );
    }
}

export default TempratureInput