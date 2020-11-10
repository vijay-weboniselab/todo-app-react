import classes from "./TaskPageLayout.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTask from "./TaskList/AddTask/AddTask";
import TaskList from "./TaskList/TaskList";

export default function TaskPageLayout() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
   
    const addTask = (task) => {
        const updatedTodos = [...todos,{...task, id : todos.length + 1}];
        dispatch({type : 'ADD', payload : updatedTodos})
    }
  
    
    return (
    <div className={classes.container}>
      <AddTask addtask = {addTask} />
      <hr/>
      <TaskList />
    </div>
  );
}
