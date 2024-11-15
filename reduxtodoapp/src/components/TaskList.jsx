import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';

const TaskList = () => {
    const tasks = useSelector(state => {
        if (state.filter === 'ALL') return state.tasks;
        if (state.filter === 'DONE') return state.tasks.filter(task => task.isDone);
        if (state.filter === 'NOT_DONE') return state.tasks.filter(task => !task.isDone);
        return [];
    });

    return (
        <div>
            {(tasks || []).length === 0 ? (
                <p>Aucune tâche à afficher</p>
            ) : (
                tasks.map((task) => (
                    <Task key={task.id} task={task} />
                ))
            )}
        </div>
    );
};

export default TaskList;
