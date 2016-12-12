const {
    TodoStores,
    TodoActions,
    InputField,
    TodoHeader,
    TodoList
} = window.App;


class TodoApp extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater);
        this.state = {
            todos: TodoStores.getAll()
        }
    }

    updateTodosBy(updateFun) {
        return (...args) => {
            this.setState({
                todos: updateFun(this.state.todos, ...args)
            });
        };
    }

    componentDidMount() {
        TodoActions.loadTodo();
        this._removeChangeListener = TodoStores.addChangeListener(
            () => { this.setState({ todos: TodoStores.getAll() })}
        );
    }

    componentWillUnmount() {
        this._removeChangeListener();
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
                    onSubmitEditing={TodoActions.createTodo}
                />
                <TodoList
                    todos={todos}
                    onDeleteTodo={TodoActions.deleteTodo}
                    onChangeTodo={TodoActions.changeTodo}
                    onUpdateTodo={TodoActions.updateTodo}
                />
            </div>
        )
    }
}

window.App.TodoApp = TodoApp;
