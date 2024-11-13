import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App = () => {
    return (
        <div>
            <AddTask />
            <TaskList />
        </div>
    );
};

export default App;
