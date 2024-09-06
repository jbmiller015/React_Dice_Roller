import React, {Component} from 'react';
import DiceList from "./DiceList";
import DisplayDice from "./DisplayDice";


class App extends Component {

    state = {
        currentVal: [],
        maxValues: [20, 12, 10, 8, 6, 4, 2],
        total: 0
    }


    setDisplay = (val, idx) => {
        if (val === 'clear') {
            this.setState((prev) => ({...prev, currentVal: [], total: 0}));
        } else {
            this.setState((prev) => ({...prev, currentVal: [...prev.currentVal, val]}));
        }

    }

    dice = () => {
        return this.state.currentVal.map((val) => <DisplayDice maxVal={val}/>)
    }


    render() {
        return (
            <>
                <h1>Click a die button, then click the die to roll</h1>
                <div style={{marginTop: "10px", display: "flex", flexDirection: 'row'}}>

                    <DiceList setDisplay={this.setDisplay} maxValues={this.state.maxValues} total={this.state.total}/>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            maxHeight: '100vh',
                            maxWidth: '100vw',
                            flexWrap: 'wrap'
                        }}>
                        {this.dice()}
                    </div>
                </div>
            </>


        );
    }
}

export default App;
