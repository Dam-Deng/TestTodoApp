const {
    TodoStores,
    TodoActions,
    TodoApp
} = window.App;

const {Container} = FluxUtils;

class TodoAppContainer extends React.Component {
    static getStores() {
        return [TodoStores];
    }
    static calculateState(prevState){
        return {
            todos: TodoStores.getState(),
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
        // this._removeChangeListener = TodoStores.addChangeListener(
        //     () => { this.setState({ todos: TodoStores.getAll() })}
        // );
    }

    // componentWillUnmount() {
    //     this._removeChangeListener();
    // }

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

window.App.TodoAppContainer = Container.create(TodoAppContainer);
