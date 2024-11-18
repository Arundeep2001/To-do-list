import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../../store/tasksSlice';
import './TaskItem.css'

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div>
        <h4>{task.title}</h4>
        <p>{task.description}</p>
      </div>
      <div>
        <button onClick={() => dispatch(toggleTask(task.id))}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
