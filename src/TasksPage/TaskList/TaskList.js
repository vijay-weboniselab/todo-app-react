import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskItem from "./TaskItem/TaskItem";

export default function TaskList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  //onCheckBox change
  let statusChanged = (status, todo) => {
    let updatedTodos = [...todos];
    updatedTodos.filter((t) => {
      if (t.id == todo.id) {
        t.completed = status;
      }
    });
    dispatch({ type: "UPDATE", payload: updatedTodos });
  };

  const deleteTask = (todo) => {
    const updatedTodos = todos.filter((t) => t.id !== todo.id);
    dispatch({ type: "DELETE", payload: updatedTodos });
  };

  return todos.map((todo) => {
    return (
      <TaskItem
        todo={{ ...todo }}
        deleteTask={deleteTask}
        valueChange={statusChanged}
        key={todo.id}
      />
    );
  });
}
