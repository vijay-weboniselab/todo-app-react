import classes from "./AddTask.module.css";
import React, { createRef } from "react";

export default function AddTask(props) {
  let taskInputRef = createRef(null);
  let dateInputRef = createRef(null);
  const updateInputs = () => {
    let task = {
      id: parseInt(Math.random() * 1000),
      completed: false,
      task: taskInputRef.current.value,
      date: new Date(dateInputRef.current.value).toLocaleDateString(),
    };
    props.addtask(task);
  };

  return (
    <div className={classes.container}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="addtask">Define Task</label>
              <input
                type="text"
                name="addtask"
                id="addtask"
                ref={taskInputRef}
              />
            </td>
            <td>
              <label htmlFor="date">Date</label>
              <input type="date" name="date" id="date" ref={dateInputRef} />
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={(event) => updateInputs(event)}>add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
