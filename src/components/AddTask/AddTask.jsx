import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/tasksSlice';
import './AddTask.css';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if(title===""){
      alert("Please enter task title");
      return;
    }
    if (title.trim()) {
      dispatch(addTask({
        id: Date.now(),
        title,
        description,
        completed: false,
      }));
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="">
      <input
        className='add_task_input'
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className='add_task_textarea'
        placeholder="Task description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className='button_container'>
        <button className='add_task_button' onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
};

export default AddTask;
