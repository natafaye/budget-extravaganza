import TransactionPage from "./transactions/TransactionPage";
import { TRANSACTIONS } from './data';
import React, { Component } from 'react'

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			transactionList: TRANSACTIONS
		}
	}

	render() {
		return (
			<div className="container">
				<TransactionPage transactionList={ this.state.transactionList } />
			</div>
		);
	}
}
