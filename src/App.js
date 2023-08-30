import './App.css';
import useModal from './hooks/useModal';
import Todo from './components/Todo';
import { useState } from 'react';

const initialState = [
    {
      id: 1,
      task: "Learn vue.js",
      isCompleted: false
    },
    {
    id:2,
      task: "Learn React Hook",
      isCompleted: false
    },
    {
      id:3,
      task: "Learn Gatsby.js",
      isCompleted: false
    }
];


function App() {
  const { Modal } = useModal();
  const [tasks, setTasks] = useState(initialState);
  const [show, setShow] = useState(false);
  const [editTask, setEditTask] = useState();

  const handleOpenModal = (task) => {
    setShow(true);
    setEditTask(task);
  }
  const handleCloseModal = () => {
    setShow(false);
  }

  const handleTaskEdit = (task) => {
    const taskIndex = findTaskIndexById(tasks, task.id);

    if (taskIndex !== -1) {
      const updateTasks = [...tasks];
      updateTasks[taskIndex] = task;
      setTasks(updateTasks);
    }
  }

  const findTaskIndexById = (tasks, id) => {
    return tasks.findIndex(task => task.id === id);
  }

  return (
    <div style={{margin: '2rem'}}>
      <h1>TODOアプリ</h1>
      <Modal show={show} editTodo={editTask} closeModal={handleCloseModal} onSave={handleTaskEdit} />
      <div id="main">
        <Todo tasks={tasks} setTasks={setTasks} openModal={handleOpenModal} />
      </div>
    </div>
  );
}

export default App;
