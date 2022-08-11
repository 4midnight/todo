export enum todoActionTypes{
    ADD_TODO = "ADD_TODO",
    DEL_TODO = "DEL_TODO",
    ERR_TODO = "ERR_TODO"
}

interface addToDo{
    type:   todoActionTypes.ADD_TODO,
    payload: any[]
}

interface delToDo{
    type: todoActionTypes.DEL_TODO
    payload: number
}

interface errToDo{
    type: todoActionTypes.ERR_TODO,
    payload: string
}

export interface todoState{
    todo: any[];
    err: null | string ;
}
export type todoAction = addToDo | errToDo | delToDo