import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import {Spot} from "./spots/spot";



class App extends React.Component {
	render() {
		return (
			<div>
			<h1>Hello, from the SPOT!</h1>
			<Spot spotId="1"/>   {/* render Spot of spotIt=1 */}
			</div>
		)
	}
}

ReactDOM.render(
	<App />,

	document.getElementById('app')
)
