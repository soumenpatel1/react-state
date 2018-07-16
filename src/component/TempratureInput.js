import React from 'react';

const handleChange = (e, props) => {
    props.onTemperatureChange(e.target.value);
  }

const TempratureInput = (props) => {
    return(
        <fieldset>
            <legend>Enter temperature in {props.scale}:</legend>
            <input value={props.temperature} onChange={props.onTemperatureChange}/>
        </fieldset>
    );
}

export default TempratureInput