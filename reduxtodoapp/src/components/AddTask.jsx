import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtask } from '../JS/Actions/Actions';

const AddTask = () => {
    const [nom, setNom] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handlesubmit = (e) => {
        e.preventDefault();
        if (nom && description) {
            dispatch(addtask({ id: Date.now(), nom, description, isDone: false }));
            setDescription('');
            setNom('');
        }
    };

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input 
                    type="text" 
                    id='nom' 
                    value={nom} 
                    onChange={e => setNom(e.target.value)} 
                    placeholder='Nom' 
                    required 
                /> 
                <br/>
                <textarea 
                    placeholder='Ajouter la description' 
                    value={description} 
                    id='description' 
                    onChange={e => setDescription(e.target.value)} 
                    required 
                /><br/>
                <button>Ajouter</button>
            </form>
        </div>
    );
};

export default AddTask;
