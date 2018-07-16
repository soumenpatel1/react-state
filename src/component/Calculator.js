import React, { Component } from 'react';
import TempratureInput from './TempratureInput';
import BoilingVerdict from './BoilingVerdict';

// Calculator Component
class Calculator extends Component {
    state = {
        temperature: '',
        scale: 'c'
    }

    toFahrenheit = (value) => (value - 32) * 5 / 9;

    toCelsius = (value) => (value - 32) * 5 / 9;

    tryConvert = (temp, convert) => {
        let input = parseFloat(temp);
        if(Number.isNaN(input)) {
            return "";
        }
        let output = convert(input);
        let rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    handleCelsiusChange = (e) => {
        this.setState({
            scale: 'c',
            temperature: e.target.value
        });
    }

    handleFarenhietChange = (e) => {
        this.setState({
            scale: 'f',
            temperature: e.target.value
        });
    }

    render() {
        const celsius = this.scale === 'f' ? this.tryConvert(this.temperature, this.toCelsius):this.temperature;
        const farenheit = this.scale === 'c' ? this.tryConvert(this.temperature, this.toFahrenheit):this.temperature;
        return(
            <div>
                <TempratureInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                <TempratureInput scale='f'temperature={farenheit} onTemperatureChange={this.handleFarenhietChange}/>
                <BoilingVerdict celsius={celsius}/>
            </div>
        );
    }
}

export default Calculator;