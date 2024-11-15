import { ADD_TASK, UPDATE_TASK, FILTER_TASK, TOGGLE_TASK } from '../Constants/Actions-listes';

const initialState = {
    tasks: [], // Correction : tasks doit être directement dans initialState, pas dans un tableau
    filter: 'ALL'
};

const Reducers = (state = initialState, action) => {
    if (!action || !action.type) {
        console.error('Action is undefined or missing type:', action);
        return state;
    }

    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id 
                        ? { ...task, nom: action.payload.nom, description: action.payload.description }
                        : task
                )
            };
            
        case FILTER_TASK:
            return {
                ...state,
                filter: action.payload
            };
        case TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload ? { ...task, isDone: !task.isDone } : task
                )
            };
        default:
            return state;
    }
};

export default Reducers;
