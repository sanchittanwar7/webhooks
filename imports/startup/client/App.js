import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class App extends Component {
	render() {
		return(
			<div></div>
		)
	}
}

Meteor.startup( () => {
	ReactDOM.render(<App />, document.querySelector('.render-target'))
});