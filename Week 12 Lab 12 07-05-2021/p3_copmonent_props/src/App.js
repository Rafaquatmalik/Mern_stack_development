import React, { Component } from 'react';
//import Table from './Table';
import './App.css';
//import Table1 from './Table1';
import Table3 from './Table3';
class App extends Component {
	render() {
		const characters = [
			{
				name: 'Charlie',
				job: 'Janitor',
			},
			{
				name: 'Mac',
				job: 'Bouncer',
			},
			{
				name: 'Dee',
				job: 'Aspring actress',
			},
			{
				name: 'Dennis',
				job: 'Bartender',
			},
		];
		return (
			<div className='container'>
				<h1>Hello React!</h1>
				{/* <Table /> */}
				{/* <Table1 /> */}
				<Table3 characterData={characters} />
			</div>
		);
	}
}
export default App;
