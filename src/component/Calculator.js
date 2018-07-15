import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';
// Calculator Component
class Calculator extends Component {
    state = {
        temperature: ''
    }

    handleChange = (e) => {
        this.setState({
            temperature: e.target.value
        });
    }

    render() {
        return(
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input
                value={this.state.temperature}
                onChange={this.handleChange} />
                <BoilingVerdict celsius={this.state.temperature}/>
            </fieldset>
        );
    }
}

export default Calculator;