import { useState } from "react";

const AddTodo = ({setTasks}) => {
  const [task, setTask] = useState("");

  const handleNewTask = (e) => {
    setTask(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === '') return;
    setTasks((todos) => [...todos, { task, isCompleted: false }]);
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      Add Task：
      <input value={task} placeholder="Add New Task" onChange={handleNewTask} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;