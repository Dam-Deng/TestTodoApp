const {ActionTypes} = window.App;
const {List, Record} = Immutable;

const TodoRecord = Record({
    id: undefined,
    title: undefined,
    completed: false,
})

const _findIdxById = (todos, id) => {return todos.findIndex((todo) => todo.id === id)};


const _createTodo = (todos, title) => {
    const id = todos.size > 0 ? todos.last().id + 1 : 1;
    return todos.push(new TodoRecord({
        id: id,
        title: title,
        completed: false
    }));
};

const _deleteTodo = (todos, id) => {
    return todos.delete(_findIdxById(todos, id));
};

const _changeTodo = (todos, id, completed) => {
    return todos.setIn([_findIdxById(todos, id), 'completed'], completed);
};

const _updateTodo = (todos, id, content) => {
    return todos.setIn([_findIdxById(todos, id), 'title'], content);
};

window.App.reducers.todos = (state = new List(), action) => {
    switch (action.type) {
        case ActionTypes.LOAD_TODOS_SUCCESS:
            return new List(action.todos).map((todo) => new TodoRecord(todo));
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