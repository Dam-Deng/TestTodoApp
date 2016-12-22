// const state = {
//     todos: []
// };
//
// const reducers = {
//     todos: todosReducer
// };
//
// const reducer = combineReducers(reducers);
//
// window.App.reducers = {};

const {ActionTypes} = window.App;


const _createTodo = (todos, title) => {
    const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    return [
        ...todos,
        {
            id: id,
            title,
            completed: false
        }
    ]
};

const _deleteTodo = (todos, id) => {
    const idx = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    if (idx !== -1) {
        newTodos.splice(idx, 1);
    }
    return newTodos;
};

const _changeTodo = (todos, id, completed) => {
    const newTodos = [...todos];
    const target = newTodos.find((todo) => todo.id === id);
    if (target) target.completed = completed;
    return newTodos;
};

const _updateTodo = (todos, id, content) => {
    const idx = todos.findIndex((todo) => {
        return todo.id === id
    });
    const newTodos = [...todos];
    newTodos[idx] = {
        ...todos[idx],
        title: content
    };
    return newTodos;
};

window.App.reducers.todos = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.LOAD_TODOS_SUCCESS:
            return action.todos;
        case ActionTypes.CREATE_TODO:
            return _createTodo(state, action.title);
        case ActionTypes.UPDATE_TODO:
            return _updateTodo(state, action.id, action.content);
        case ActionTypes.CHANGE_TODO:
            return _changeTodo(state, action.id, action.completed);
        case ActionTypes.DELETE_TODO:
            return _deleteTodo(state, action.id);
        default:
            return state;
    }
};