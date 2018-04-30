import React from 'react';
import './spot.css';

export class Spot extends React.Component {
    constructor (props){
        super(props);
       // <!-------start of block .bind(this)---------!-->



       // <!-------end of block .bind(this)---------!-->
        this.state = {
            spotId:             props.spotId,
            hdg:                0,
            spotX:              0,       //Geo positioning coordinates X of the respective Spot
            spotY:              0,       //Geo positioning coordinates y of the respective Spot
            minTariff:          0,   //Minimum stated tariff set by Admin - it may not equal to the amount paid due to other constraints e.g. various discounts,
            maxTariff:          0,   //Minimum stated tariff set by Admin - it may not equal to the amount paid due to other constraints e.g. various discounts,
            sweetStartTariff:   0, //Tariff applicable at sweetStartOccup as defined by the Admin
            sweetEndTariff:     0, //Tariff applicable at sweetEndOccup as defined by the Admin
            sweetStartOccup:    props.sweetStartOccup, //A lower limit treshold where the occupancy should ideally be - cost go up (default value = 70%).
            sweetEndOccup:      props.sweetEndOccup, //A top limit treshold where the occupancy should ideally be - cost go up even steeper (default value = 90%).
            permitDiscount:     0, //Tariff discount applicable to permit holders (police, medical assistance, emergency, etc) 0=0%, 1 = 100%
            residentDiscount:   0, //Tariff discount applicable to the registered local residents (procedure to be clarified) 0=0%, 1 = 100%
            offPeakDiscount:    0, //Tariff discount applicable during off peak hours (night, weekends) 0=0%, 1 = 100%
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
            <div>
                <div className="spot_component container">
                <h2>Spot No.: {this.state.spotId} </h2>  {/* I want to show Id of the spot! */}
                <p>Coordinates: X:{this.state.spotX} Y:{this.state.spotY}</p> {/* These are geo coordinates of the respective Spot! */}
                </div>
            </div>
        )
    }
}

Spot.defaultProps ={
    sweetStartOccup:    0.70,
    sweetEndOccup:      0.90,
    permitDiscount:     1.0,
};