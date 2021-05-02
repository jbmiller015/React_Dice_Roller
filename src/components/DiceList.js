import React, {useEffect, useState} from 'react';
import Modifier from "./Modifier";


const DiceList = ({setDisplay, maxValues}) => {


    const [currValue, setCurrValue] = useState(null);
    const [modifier, setModifier] = useState(null);
    const [currMax, setCurrMax] = useState(null);


    const onSearchSubmit = (val) => {
        let result = roll(val, modifier);
        setCurrValue(result);
        setCurrMax(val);
    }

    useEffect(() => {
        setDisplay(currValue, currMax);
    }, [currValue, currMax, setDisplay])

    const roll = (maxVal, modifier = 1) => {
        let total = 0;
        for (let i = 0; i < modifier; i++) {
            total += (Math.floor(Math.random() * maxVal) + 1);
        }
        return total;
    }


    const renderList = maxValues.map((maxVal) => {
        return (
            <div className="item" key={maxVal} style={{width: '300px', justifyContent: 'center'}}>
                <div className="left floated content">
                    <Modifier onSubmit={onSearchSubmit} maxValue={maxVal} setMod={setModifier}/>
                </div>

            </div>
        );
    });


    return (
        <div className="ui divided list">
            {renderList}
        </div>
    );


}
export default DiceList;
