import React from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';

const App = () => {
	const todoData = [
		{
			label: 'Drink Coffe',
			important: false,
			id: 1
		},
		{
			label: 'Make Avesome',
			important: true,
			id: 2
		},
		{
			label: 'Okey Lets go',
			important: false,
			id: 3
		}
	]
	return (
			<div>
				<AppHeader todo={1} done={3}/>
				<SearchPanel/>
				<ItemStatusFilter/>
				<TodoList todos={todoData}/>
			</div>
	);
};

export default App