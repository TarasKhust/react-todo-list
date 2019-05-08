import React from 'react';

import './todo-list-item.css';

const TodoListItem = props => {

	const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = props;
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
					onClick={onToggleDone}
					className='todo-list-item'>
				{label}
			</span>

			<button type='button'
			        onClick={onDeleted}
			        className='btn btn-outline-danger btn-sm'>
				<i className='fa fa-trash-o'/>
			</button>

			<button type='button'
			        onClick={onToggleImportant}
			        className='btn btn-outline-success btn-sm'>
				<i className='fa fa-exclamation'/>
			</button>


			</span>
	);
}

export default TodoListItem