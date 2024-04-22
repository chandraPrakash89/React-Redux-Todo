import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";

const AddTodoForm = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();

		if(value.trim().length === 0)
		{
			setValue("");
			return;
		}

		dispatch(
			addTask({
				task: value
			})
		);

		setValue("");
	};

	return (
        <>
        <center>
        <h2>Redux Todo List</h2>
        <h3>Add Todo</h3>
        <div className="add-todo">
            <input
                type="text"
                className="task-input"
                placeholder="Enter a new todo"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            ></input>

            <button className="task-button" onClick={onSubmit}>
                Add
            </button>
        </div></center></>
	);
};

export default AddTodoForm;