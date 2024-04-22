import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";


const TodoList = () => {
    console.log('<++---todo')
	const todos = useSelector((state)=>{
		return state.tasks;
	});
    console.log(todos, '<---todo')

	return (
        
		<ul className="tasks-list">
            
			{todos.map((todo) => (
				 <TodoItem id={todo.id} text={todo.text} completed={todo.status} />

			))}
            {/* <TodoItem todos={todos} /> */}

		</ul>
	);
};

export default TodoList;