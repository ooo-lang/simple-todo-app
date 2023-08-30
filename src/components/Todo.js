import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const Todo = ({ tasks, setTasks, openModal }) => {
  return (
    <>
      <div>
        <AddTodo setTasks={setTasks} />
        <TodoList tasks={tasks} setTasks={setTasks} openModal={openModal} />
      </div>
    </>
  );
}

export default Todo;