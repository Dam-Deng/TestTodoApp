const {ActionTypes} = window.App;

window.App.TodoActions = {
    createTodo(title) {
        return {
            type: ActionTypes.CREATE_TODO,
            title
        }
    },
    loadTodo(){
        return (dispatch) =>{
            fetch('./todos.json')
                .then((response) => response.json())
                .then((todos) => dispatch({
                    type: ActionTypes.LOAD_TODOS_SUCCESS,
                    todos
                }));
        }
    },
    updateTodo(id, title){
        return {
            type: ActionTypes.UPDATE_TODO,
            id,
            title
        }
    },
    changeTodo(id, completed){
        return {
            type: ActionTypes.UPDATE_TODO,
            id,
            completed
        }
    },
    deleteTodo(id){
        return {
            type: ActionTypes.DELETE_TODO,
            id
        }
    }
};



















