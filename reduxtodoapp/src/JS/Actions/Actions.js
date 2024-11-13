import { ADD_TASK, UPDATE_TASK, FILTER_TASK, TOGGLE_TASK } from "../Constants/Actions-listes"

export const addtask = (task) => ({
    type: ADD_TASK,
    payload: task
})

export const updatetask = (id , description) => ({
    type: UPDATE_TASK,
    payload: {id , description}
})

export const filtertask = (filter) => ({
    type: FILTER_TASK,
    payload: filter
})

export const toggletask = (id) => ({
    type: TOGGLE_TASK,
    payload: id
})