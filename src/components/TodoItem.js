import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTask, toggleComplete } from "../tasksSlice";
import '../index.css'
// import { DataGrid } from '@mui/x-data-grid';


const TodoItem = ({ id, text, completed }) => {


    const dispatch = useDispatch();

    const removeTask = () => {
        dispatch(
            deleteTask({
                id: id
            })
        )
    }
    const handleChange = () => {
        // toggleCompleted(id);
        dispatch(
            toggleComplete({
                id: id
            })
        )
     }

    return (
        <center>
            <table>
                <tr>
                    <td><input
                        type="checkbox"
                        checked={completed}
                        onChange={handleChange}
                    /></td>
                    <td>{text}</td>
                    <td><button className="remove-task-button" onClick={() => {
                        removeTask();
                    }}>Delete</button></td>

                </tr>
            </table>
        </center>
        // <DataGrid
        //     rows={todos}
        //     // columns={columns}
        //     initialState={{
        //         pagination: {
        //             paginationModel: { page: 0, pageSize: 5 },
        //         },
        //     }}
        //     pageSizeOptions={[5, 10]}
        //     checkboxSelection
        // />
    );
};

export default TodoItem;