import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatetask, toggletask } from '../JS/Actions/Actions';

const Task = ({ task }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(task.nom);
    const [newDescription, setNewDescription] = useState(task.description);

    // Handler for toggling the completion status
    const handleToggle = () => dispatch(toggletask(task.id));

    // Handler for saving the updated task name and description
    const handleSave = () => {
        if (newName.trim() && newDescription.trim()) {
            dispatch(updatetask(task.id, { nom: newName, description: newDescription }));
        }
        setIsEditing(false);  // Exit edit mode
    };

    // Toggle the edit mode
    const handleEditToggle = () => setIsEditing(!isEditing);

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', width:'100%'  }}>
            {/* Toggle Button for Done/Not Done */}
            
            {isEditing ? (
                <div>
                    {/* Editable fields for name and description */}
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        placeholder="Nom"
                    /><br/>
                    <textarea
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        placeholder="Description"
                    /><br/>
                    <button onClick={handleSave}>Sauvegarder</button>
                </div>
            ) : (
                <div>
                    {/* Display name and description */}
                    <h3>{task.nom}</h3>
                    <p>{task.description}</p>
                    <button onClick={handleEditToggle}>Modifier</button>
                </div>
            ) }

                <button onClick={handleToggle}>
                    {task.isDone ? 'Pas Fait' : 'Fait'}
                    </button>
                </div>
    );
};

export default Task;
