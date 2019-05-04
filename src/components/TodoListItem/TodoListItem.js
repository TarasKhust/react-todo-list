import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({ label, important = false }) => {
	const style = {
		color: important ? 'blue' : 'black',
		fontWeight: important ? '700' : '400'
	};
	return (
			<span className='todo-list-item'>
			<span style={style}
        className='todo-list-item'>
				{label}
			</span>

			<button type='button'
			        className='btn btn-outline-danger btn-sm'>
				<i className='fa fa-trash-o' />
			</button>

			<button type='button'
			className='btn btn-outline-success btn-sm'>
				<i className='fa fa-exclamation' />
			</button>


			</span>
	);
};

export default TodoListItem;