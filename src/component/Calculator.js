import React, { Component } from 'react';
import TempratureInput from './TempratureInput';
// Calculator Component
class Calculator extends Component {
    state = {
        temperature: ''
    }

    

    render() {
        return(
            <div>
                <TempratureInput scale='c'/>
                <TempratureInput scale='f'/>
            </div>
        );
    }
}

export default Calculator;