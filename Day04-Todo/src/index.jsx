import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Todo() {
  const [userTask, setuserTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  function AddTask() {
    if (userTask.trim() !== "") {
      setTaskArray([...taskArray, userTask]);
      setuserTask("");
    }
  }

  function DeleteTask(idx) {
    const newArray = taskArray.filter((_, index) => index !== idx);
    setTaskArray(newArray);
  }

  function StartEditing(idx) {
    setEditIndex(idx);
    setEditValue(taskArray[idx]);
  }

  function SaveUpdatedTask() {
    const updatedArray = taskArray.map((task, index) =>
      index === editIndex ? editValue : task
    );
    setTaskArray(updatedArray);
    setEditIndex(null);
    setEditValue("");
  }


  return (
    <div id="box">
      <div id="input-header">
        <input
          type="text"
          id="input-box"
          placeholder="Enter your task"
          value={userTask}
          onChange={(e) => setuserTask(e.target.value)}
        />
        <button className="btn" onClick={AddTask}>
          Add
        </button>
      </div>



      <div id="task-body">
        {taskArray.map((task, index) => (
          <div className="task-box" key={index}>
            {editIndex === index ? (
              <input
                className="task"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
            ) : (
              <div className="task">{task}</div>
            )}

            <button className="btn2" onClick={() => DeleteTask(index)}>
              Delete
            </button>

            {editIndex === index ? (
              <button className="btn2 btn3" onClick={SaveUpdatedTask}>
                Save
              </button>
            ) : (
              <button className="btn2 btn3" onClick={() => StartEditing(index)}>
                Edit
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Todo />);
