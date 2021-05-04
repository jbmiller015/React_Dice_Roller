import React, {useEffect, useState} from 'react';
import Modifier from "./Modifier";


const DiceList = ({setDisplay, maxValues}) => {


    const renderList = maxValues.map((maxVal) => {
        return (
            <div className="item" key={maxVal} style={{width: '300px', justifyContent: 'center'}}>
                <div className="left floated content">
                    <Modifier onSubmit={setDisplay} maxValue={maxVal}/>
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
