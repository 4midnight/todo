import { todoAction, todoActionTypes, todoState } from "../../types/todo"


const initialState: todoState = {
    todo: [],
    err: null
}

export const todoReducer = (state = initialState, action: todoAction ): todoState => {
    switch (action.type){
        case todoActionTypes.ADD_TODO: 
            return {todo: [...state.todo, action.payload], err: null};
        case todoActionTypes.DEL_TODO:
            return {todo: state.todo.filter( item => item.id != action.payload), err: null};    
        case todoActionTypes.ERR_TODO:
            return {todo: state.todo, err: action.payload}    
        default:
            return state;    
    }
}


export const addToDoAC = (payload: {}) => ({ type: todoActionTypes.ADD_TODO, payload })
export const delToDoAC = (payload: any) => ({ type: todoActionTypes.DEL_TODO, payload })
export const errToDoAC = (payload: string | null) => ({ type: todoActionTypes.ERR_TODO, payload })