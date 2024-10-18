import {useContext, createContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Complete todo project",
            isCompleted: false
        }
    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo)=> {},
    completeToggle: (id)=> {}

});
export const useTodo = () => {
    return useContext(TodoContext)
}


export const TodoProvider = TodoContext.Provider;