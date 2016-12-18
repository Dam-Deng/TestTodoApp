const state = {
    todos: []
};

const reducers = {
    todos: todosReducer
};

const reducer = combineReducers(reducers);

window.App.reducers = {};