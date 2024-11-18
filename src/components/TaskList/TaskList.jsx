import { useSelector } from 'react-redux';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available. Add some!</p>
      ) : (
        tasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
};

export default TaskList;
