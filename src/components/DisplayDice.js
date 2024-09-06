import React, {useState} from 'react';
import {imageSelector} from "../images/ImageSelector";
import './DisplayDice.css';

const DisplayDice = ({maxVal}) => {
    const [diceValue, setDiceValue] = useState(null);


    const roll = () => {
        return setDiceValue(Math.floor(Math.random() * maxVal) + 1);
    }

    return (
        <div className="dice-display" onClick={() => roll()}>
            <img src={imageSelector(maxVal)} alt="die"/>
            <h1>{diceValue}</h1>
        </div>
    );
};

export default DisplayDice;
