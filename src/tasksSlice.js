import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState:[],
    reducers:{
        addTask: (state, action)=>{
            const newTask = {
                id: new Date(),
                text: action.payload.task,
                completed:false
            }
            state.push(newTask);
        },
        deleteTask: (state, action)=>{
            console.log('action',action);
            return state.filter((item) => item.id !== action.payload.id);
        },
        toggleComplete: (state, action) => {
            console.log('action',action);
            const todo = state.find((todo) => todo.id === action.payload.id);
            console.log('todo',todo.completed);
            if (todo) {
              todo.completed = !todo.completed;
            }
          },
    }
});

export const {addTask, deleteTask, toggleComplete} = tasksSlice.actions;

export default tasksSlice.reducer;