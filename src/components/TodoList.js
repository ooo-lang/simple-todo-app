const TodoList = ({ tasks, setTasks, openModal }) => {
  const handleRemoveTask = (index) => {
    const newTodos = [...tasks];
    newTodos.splice(index, 1);
    setTasks(newTodos);
  };

  const handleUpdateTask = (index) => {
    let newTodos = tasks.map((task, taskIndex) => {
      if (taskIndex === index) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    setTasks(newTodos);
  };

  return (
    <div>
      <ul>
        {tasks.map((task, i) => (
          <li
            key={i}
            style={{
              textDecoration: task.isCompleted ? "line-through" : "none"
            }}
          >
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => handleUpdateTask(i)}
            />
            {task.task}{" "}
            <button
              onClick={() => openModal(task)}
            >
              Edit
            </button>
            <button
              onClick={() => handleRemoveTask(i)}
              style={{ cursor: "pointer" }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

};

export default TodoList;