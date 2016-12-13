const {
    TodoStores,
    TodoActions,
    TodoApp
} = window.App;


class TodoAppContainer extends React.Component {
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
        return (
            <TodoApp
                todos={this.state.todos}
                onSubmitEditing={TodoActions.createTodo}
                onDeleteTodo={TodoActions.deleteTodo}
                onChangeTodo={TodoActions.changeTodo}
                onUpdateTodo={TodoActions.updateTodo}
            />
        )
    }
}

window.App.TodoAppContainer = TodoAppContainer;
