const {
    InputField,
    TodoHeader,
    TodoList
} = window.App;


class TodoApp extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater);
        this.state = {
            todos: [
                {
                    id: 1,
                    title: "title1",
                    completed: true
                },
                {
                    id: 2,
                    title: "title2",
                    completed: false
                }
            ]
        }
    }

    updateTodosBy(updateFun) {
        return (...args) => {
            this.setState({
                todos: updateFun(this.state.todos, ...args)
            });
        };
    }


    render() {
        const {todos} = this.state;
        const headerData = {
            title: "你的待辦清單",
            name: "dam",
            todoCount: todos.filter((todo) => !todo.completed).length
        };
        return (
            <div>
                <TodoHeader {...headerData}/>
                <InputField
                    placeholder="新的待辦事項"
                    onSubmitEditing={this.updateTodosBy(_createTodo)}
                />
                <TodoList
                    todos={todos}
                    onDeleteTodo={this.updateTodosBy(_deleteTodo)}
                    onChangeTodo={this.updateTodosBy(_changeTodo)}
                    onUpdateTodo={this.updateTodosBy(_updateTodo)}
                />
            </div>
        )
    }
}

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

const _createTodo = (todos, title) => {
    todos.push({
        id: todos[todos.length - 1].id + 1,
        title,
        completed: false
    });
    return todos;
};

const _updateTodo = (todos, id, content) => {
    const target = todos.find((todo) => {
        return todo.id === id
    });
    target.title = content;
    return todos;
};

window.App.TodoApp = TodoApp;
