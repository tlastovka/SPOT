import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';

class App extends React.Component {
	render() {
		return (
			<h1>Hello, from the SPOT!</h1>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
