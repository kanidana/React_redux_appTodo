import React from 'react';

const Task = ({ task }) => {
    return (
        <div>
            <h1>{task.nom}</h1>
            <p>{task.description}</p>
        </div>
    );
};

export default Task;
