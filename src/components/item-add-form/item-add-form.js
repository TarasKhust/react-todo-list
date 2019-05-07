import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

	state = {
		label: ''
	}

	onLabelChange = evt => {
		this.setState({
			label: evt.target.value
		})
	}

	onSubmit = evt => {
		evt.preventDefault()
		this.props.onItemAdded(this.state.label)
		this.setState({
			label: ''
		})
	}

	render() {
		return (
				<form className='item-add-form'
				onSubmit={this.onSubmit}>
					<input type="text"
					       className='form-control'
					       onChange={this.onLabelChange}
					       value={this.state.label}
					       placeholder='waths to bee done'/>
					<button className='btn btn-outline-secondary'
					        onClick={this.onSubmit}>Add Item
					</button>
				</form>
		);
	}
};
