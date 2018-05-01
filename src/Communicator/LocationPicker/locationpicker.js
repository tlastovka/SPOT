//Tests
console.log("locationpicker.js is running");
//End of Tests
//Install -> Import -> Use

/*https://www.npmjs.com/package/react-location-picker - this is the NPL component that I have decided to use. I included the google API key = AIzaSyBWGGEF4QPmqls_6W8MV6L0Z8btsQ9AG-0 from https://developers.google.com/maps/documentation/javascript/get-api-key. The project has a name SPOT-IoT.*/

import React, { Component } from 'react';
import LocationPicker from 'react-location-picker';

/* Default position */
const defaultPosition = {
    lat: 50.0755,
    lng: 14.4378
};



class LocationPickerMap extends Component {
    constructor (props) {
        super(props);

        this.state = {
            address: "Prague, Czech Republic",
            position: "",
        };
        // Bind
        this.handleLocationChange = this.handleLocationChange.bind(this);
    }

    /////////////////////////////////////////////////////////////////////////

    // this is a lifecycle method which gets fired when the component is first mounted to the DOM. used mostly for fetching data//
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            console.log('fetching data');
            if (options) {
                this.setState(() => ({options: options})); //this can be expressed also as: .. => ({options}));
            }
        } catch (e) {
            // Do nothing at all
        }
    }

// this is a lifecycle method which gets fired when the component is updated in the DOM. Used mostly for saving data //
    componentDidUpdate(prevProps, prevState){
        if (this.state.position !== prevState.position) {
            const json = JSON.stringify(this.state.position);
            localStorage.setItem('options', json);
            console.log('saving data!');
        }
    }

// this is a lifecycle method which gets fired when the component is unmounted from the DOM -  //
    componentWillUnmount(){
        console.log('componentWillUnmount!')
    }





    ////////////////////////////////////////////////////////////////



    handleLocationChange ({ position, address }) {


        // Change state
        this.setState({ position, address });
    }

        // Render
    render () {
        return (
            <div>
                <h1>{this.state.address}</h1>
                <h3>Latitude: {this.state.position.lat}</h3>
                <h3>Longitude: {this.state.position.lng}</h3>
                <div>
                    <LocationPicker
                        containerElement={ <div style={ {height: '100%'} } /> }
                        mapElement={ <div style={ {height: '400px'} } /> }
                        defaultPosition={defaultPosition}
                        onChange={this.handleLocationChange}
                    />
                </div>

            </div>
        )
    }
}

export {LocationPickerMap}