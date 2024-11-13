import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);

    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;
