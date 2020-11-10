import React from "react";
import classes from "./TaskItem.module.css";
export default function TaskItem(props) {
  return (
    <div className={classes.itemContainer}>
      <span className={classes.id}>{props.todo.id}</span>
      <span>{props.todo.date}</span>
      <span className={classes.checkbox}> <input
                type="checkbox"
                name="status"
                id="status"
                checked={props.todo.completed}
                onChange={event => props.valueChange(event.target.checked,props.todo)}
              /></span>
      <button onClick={event => props.deleteTask(props.todo)} className={classes.delete}>Delete</button>
      <div className={classes.task}>
        <span className={props.todo.completed ? classes.completed : null}>{props.todo.task}</span>
      </div>
    </div>
  );
}
/* 
              <input
                type="checkbox"
                name="status"
                id="status"
                checked={props.todo.completed}
                onChange={event => props.valueChange(event.target.checked,props.todo)}
              />
<span className="id">{props.todo.id}</span>
<p className="task">{props.todo.task}</p>
<span className="date">{props.todo.date}</span> */
