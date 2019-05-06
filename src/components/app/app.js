import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemAddFrom from '../item-add-form/item-add-form';
import ItemStatusFilter from '../ItemStatusFilter';

export default class App extends Component {
	maxId = 0;
	state = {
		todoData: [
			this.createTodoItem('Drink Coffee'),
			this.createTodoItem('Make Avesome'),
			this.createTodoItem('Okey Lets go'),
		],
	};

	createTodoItem(label) {
		return {
			label,
			important: false,
			done: false,
			id: this.maxId++,
		};
	}

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
		const newItem = this.createTodoItem(text)
		// add element in array ?
		this.setState(({ todoData }) => {
			const newArr = [
				...todoData,
				newItem,
			];
			return {
				todoData: newArr,
			};
		});
	};

	toggleProperty(arr, id, propName) {
			const idx = arr.findIndex(el => el.id === id);

			// 1. update object
			const oldItem = arr[idx];
			const newItem = {...oldItem, [propName]: !oldItem[propName]};

			// 2. construct new array
			return [
				...arr.slice(0, idx),
				newItem,
				...arr.slice(idx + 1)
			]
		}

	onToggleImportant = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'important')
			}
		})
	};

	onToggleDone = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'done')
			}
		})
	};

	render() {
		const { todoData } = this.state;
		const doneCount = todoData.filter(el => el.done).length;
		const todoCount = todoData.length - doneCount;
		return (
				<div>
					<AppHeader toDo={todoCount} done={doneCount}/>
					<SearchPanel/>
					<ItemStatusFilter/>
					<TodoList todos={todoData}
					          onDeleted={this.deleteItem}
					          onToggleImportant={this.onToggleImportant}
					          onToggleDone={this.onToggleDone}
					/>
					<ItemAddFrom onItemAdded={this.addItem}/>
				</div>
		);
	};
};