const {ActionTypes, AppDispatcher} = window.App;

const CHANGE_EVENT = 'CHANGE';

const _emitter = new EventEmitter();

let todos = [];

const _createTodo = (todos, title) => {
    const id = todos.length > 1 ? todos[todos.length - 1].id + 1 : 1;
    todos.push({
        id: id,
        title,
        completed: false
    });
    return todos;
};

const _deleteTodo = (todos, id) => {
    const idx = todos.findIndex((todo) => todo.id === id);
    if (idx !== -1) {
        todos.splice(idx, 1);
    }
    return todos;
};

const _changeTodo = (todos, id, completed) => {
    const target = todos.find((todo) => todo.id === id);
    if (target) target.completed = completed;
    return todos;
};
const _updateTodo = (todos, id, content) => {
    const target = todos.find((todo) => {
        return todo.id === id
    });
    target.title = content;
    return todos;
};

window.App.TodoStores = {
    getAll(){
        return todos;
    },

    addChangeListener(callback){
        _emitter.on(CHANGE_EVENT, callback);
        return () => _emitter.removeListener(CHANGE_EVENT, callback);
    },

    dispatchToken: AppDispatcher.register((action) => {
        switch (action.type){
            case ActionTypes.LOAD_TODOS_SUCCESS:
                todos = action.todos;
                _emitter.emit(CHANGE_EVENT);
                break;
            case ActionTypes.CREATE_TODO:
                todos = _createTodo(todos, action.title);
                _emitter.emit(CHANGE_EVENT);
                break;
            case ActionTypes.UPDATE_TODO:
                todos = _updateTodo(todos, action.id, action.content);
                _emitter.emit(CHANGE_EVENT);
                break;
            case ActionTypes.CHANGE_TODO:
                todos = _changeTodo(todos, action.id, action.completed);
                _emitter.emit(CHANGE_EVENT);
                break;
            case ActionTypes.DELETE_TODO:
                todos = _deleteTodo(todos, action.id);
                _emitter.emit(CHANGE_EVENT);
                break;
        }
    })
}