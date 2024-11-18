import { Provider } from 'react-redux';
import store from './store/store';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/TaskList/TaskList';
import './App.css';


const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1 className='main_heading'>To-Do List</h1>
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;

