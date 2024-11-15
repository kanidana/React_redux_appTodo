import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { useDispatch } from 'react-redux';
import { filtertask } from './JS/Actions/Actions';
import './App.css'

const App = () => {
    const dispatch = useDispatch();

    return (
        <div className='App'>
            <h1>ToDo Application</h1>
            <AddTask />
            <div style={{ margin: '20px 0' }}>
                <button onClick={() => dispatch(filtertask('ALL'))}>All</button>
                <button onClick={() => dispatch(filtertask('DONE'))}>Done</button>
                <button onClick={() => dispatch(filtertask('NOT_DONE'))}>Not Done</button>
            </div>
            <TaskList />
        </div>
    );
};

export default App;
