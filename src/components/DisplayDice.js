import React from 'react';
import {imageSelector} from "../images/ImageSelector";
import './DisplayDice.css';

const DisplayDice = ({value, maxVal}) => {
    console.log(maxVal)

    return (
        <div className="dice-display">
            <img src={imageSelector(maxVal)} alt="die"/>
            <h1>{value}</h1>
        </div>
    );
};

export default DisplayDice;
