//Tests
console.log("communicator.js is running");
//End of Tests
//Install -> Import -> Use

import React from 'react';
import './communicator.css';
export class Communicator extends React.Component {
    constructor (props){
        super(props);
        // <!-------start of block .bind(this)---------!-->



        // <!-------end of block .bind(this)---------!-->
        this.state = {
            message: "Where to park your car?",

            address: []

        }
    };

    componentDidMount(){
        //fetch data from the DB
        console.log('spot component is loading data');
    };

    componentDidUpdate(){
        //saving data from the DB
        console.log('spot component is saving data');
    };

    componentWillUnmount(){
        //to be filled at the end when I am deleting a spot
    }

    render() {
        return (
            <div className="input-group">
                <div className="input-group-append">
                <select className="custom-select" id="inputGroupSelectTarget01"> {/*warning.js:33 Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.*/}
                    <option selected>Where to park?</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                    <button className="btn btn-outline-secondary" type="button" OnClick="#">Submit</button> {/*this is where I add store function of the Target to the DB. It may actually be an "action" instead of "OnClick"*/}
                </div>
            </div>
        )
    }
}

// Communicator.defaultProps ={
    // sweetStartOccup:    0.70,
    // sweetEndOccup:      0.90,
    // permitDiscount:     1.0,
// };



export default Communicator;