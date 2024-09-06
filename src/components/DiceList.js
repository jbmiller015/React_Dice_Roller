import React from 'react';

const DiceList = ({setDisplay, maxValues, total}) => {


    const renderList = maxValues.map((maxVal, idx) => <button key={idx} className="ui button primary"
                                                              style={{margin: '2%'}}
                                                              onClick={() => setDisplay(maxVal)}>{maxVal > 9 ? `D${maxVal}` : `D0${maxVal}`}</button>);


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '20%',
            height: '50%',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            {renderList}
            <br/>
            <br/>
            <button className="ui button"
                    type="submit" onClick={() => setDisplay('clear')}>Clear
            </button>
        </div>
    );


}
export default DiceList;
