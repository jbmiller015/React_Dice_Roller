import React, {Component} from 'react';
import DiceList from "./DiceList";
import DisplayDice from "./DisplayDice";


class App extends Component {

    state = {
        currentVal: null,
        maxValues: [20, 12, 10, 8, 6, 4, 2],
        currentMaxVal: null
    }


    setDisplay = (val, maxVal) => {
        this.setState({currentVal: val, currentMaxVal: maxVal});
    }


    render() {
        return (
            <div className="ui container grid" style={{marginTop: "10px"}}>
                <div className="ui row">
                    <div className="column six wide">
                        <DiceList setDisplay={this.setDisplay} maxValues={this.state.maxValues}/>
                    </div>
                    <div className="column eight wide">
                        <DisplayDice value={this.state.currentVal} maxVal={this.state.currentMaxVal}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
