import React, { Component } from 'react';

import './TodoListItem.css';

export default class TodoListItem extends Component {

	state = {
		done: false,
		important: false,
	};

	onLabbelClick = () => {
		this.setState(({done}) => {
			return {
				done: !done
			}
		});
	};

	onMarkClick = () => {
		this.setState(({important}) => {
			return {
				important: !important
			}
		});
	};

	render() {
		const { label, onDeleted } = this.props;
		const { done, important } = this.state;
		let classNames = 'todo-list-item';
		if (done) {
			classNames += ' done';
		}

		if (important) {
			classNames += ' important';
		}

		return (
				<span className={classNames}>
			<span
					onClick={this.onLabbelClick}
					className='todo-list-item'>
				{label}
			</span>

			<button type='button'
			        onClick={onDeleted}
			        className='btn btn-outline-danger btn-sm'>
				<i className='fa fa-trash-o'/>
			</button>

			<button type='button'
			        onClick={this.onMarkClick}
			        className='btn btn-outline-success btn-sm'>
				<i className='fa fa-exclamation'/>
			</button>


			</span>
		);
	};
}