const {ActionTypes, AppDispatcher} = window.App;

window.App.TodoActions = {
    createTodo(title) {
        AppDispatcher.dispatch({
            type: ActionTypes.CREATE_TODO,
            title
        })
    },
    loadTodo() {
      fetch('/todos.json')
          .then((response) => response.json())
          .then((todos) => AppDispatcher.dispatcher({
              type: ActionTypes.LOAD_TODOS_SUCCESS,
              todos,
          }));
    },
    updateTodo(id, title) {
        AppDispatcher.dispatch({
            type: ActionTypes.UPDATE_TODO,
            id,
            title,
        })
    },
    changeTodo(id, completed) {
        AppDispatcher.dispatch({
            type: ActionTypes.CHANGE_TODO,
            id,
            completed,
        })
    },
    deleteTodo(id) {
        AppDispatcher.dispatch({
            type: ActionTypes.DELETE_TODO,
            id,
        })
    }
};