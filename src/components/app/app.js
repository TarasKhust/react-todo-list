import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemAddFrom from '../item-add-form/item-add-form';
import ItemStatusFilter from '../ItemStatusFilter';

export default class App extends Component {
	maxId = 100;
	state = {
		todoData: [
			{
				label: 'Drink Coffe',
				important: false,
				id: 1,
			},
			{
				label: 'Make Avesome',
				important: true,
				id: 2,
			},
			{
				label: 'Okey Lets go',
				important: false,
				id: 3,
			},
		],
	};

	deleteItem = (id) => {
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex(el => el.id === id);
			const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
			return {
				todoData: newArray,
			};
		});
	};

	addItem = (text) => {
		// generate id ?
		const newItem = {
			label: text,
			important: false,
			id: this.maxId++,
		};
		// add element in array ?
		this.setState(({ todoData }) => {
			const newArr = [
					...todoData,
					newItem
			]
			return {
			todoData: newArr
			};
		});
	};

	render() {
		return (
				<div>
					<AppHeader toDo={1} done={3}/>
					<SearchPanel/>
					<ItemStatusFilter/>
					<TodoList todos={this.state.todoData}
					          onDeleted={this.deleteItem}/>
					<ItemAddFrom onItemAdded={this.addItem}/>
				</div>
		);
	};
};