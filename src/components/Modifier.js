import React, {useState} from 'react';


const Modifier = ({setDisplay, maxValue}) => {


    const [modifier, setModifier] = useState(1);


    const onFormSubmit = (event => {
        event.preventDefault();
        let currVal = roll(maxValue, modifier)
        setDisplay(currVal, maxValue);

        //how to solve 'property 'state' of undefined...':
        //1. Function binding in constructor
        //2. Turn function into arrow function (arrow functions automatically bind function
        //3. Pass onSubmit arrow function that invokes onFormSubmit: <form className="ui form" onSubmit={(e) => this.onFormSubmit(e)}>
    })

    const roll = (maxVal, modifier = 1) => {
        let total = 0;
        for (let i = 0; i < modifier; i++) {
            total += (Math.floor(Math.random() * maxVal) + 1);
        }
        return total;
    }


    return (<div>
        <div className="ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field" style={{display: 'inline-flex'}}>
                    <button className="ui button primary"
                            type="submit">{maxValue > 9 ? `D${maxValue}` : `D0${maxValue}`}</button>
                    <br/>
                    x:<input type="number"
                             id="modNum"
                             value={modifier}
                             onChange={(e) => {
                                 setModifier(e.target.value);
                             }}
                             onInput={(e) => {
                                 setModifier(e.currentTarget.value)
                             }}
                             min="1"
                             max="20"/>
                </div>
            </form>
        </div>
    </div>);


}
export default Modifier;
