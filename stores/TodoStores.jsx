const {ActionTypes, AppDispatcher} = window.App;
const {ReduceStore} = FluxUtils;

const CHANGE_EVENT = 'CHANGE';

const _emitter = new EventEmitter();

let todos = [];

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

class TodoStores extends ReduceStore {
    getInitialState() {
        return [];
    }

    // getAll(){
    //     return todos;
    // }
    //
    // addChangeListener(callback){
    //     _emitter.on(CHANGE_EVENT, callback);
    //     return () => _emitter.removeListener(CHANGE_EVENT, callback);
    // }

    reduce(state, action) {
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
    }
}

window.App.TodoStores = new TodoStores(AppDispatcher);