import React, { Component } from 'react';

export default class SearchPanel extends Component{

	state = {
		term: ''
	}

	onSearchChange = (evt) => {
		const term = evt.target.value;
		this.setState({ term })
		this.props.searchItem(term)
}
	render() {
		return (
				<input type="text"
				       className='form-control search-input'
				       placeholder='type to search'
				       value={this.state.term}
				       onChange={this.onSearchChange}
				/>
		);
	}
};
