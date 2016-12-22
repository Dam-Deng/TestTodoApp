const {
    TodoStores,
    TodoActions,
    TodoApp
} = window.App;

const {Container} = FluxUtils;
const {connect} = ReactRedux;

class TodoAppContainer extends React.Component {
    static getStores() {
        return [TodoStores];
    }

    static calculateState(prevState) {
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
        this.props.loadTodo();
    }

    // componentWillUnmount() {
    //     this._removeChangeListener();
    // }

    render() {
        console.log(1);
        return (
            <TodoApp
                todos={this.props.todos}
                onSubmitEditing={this.props.createTodo}
                onDeleteTodo={this.props.deleteTodo}
                onChangeTodo={this.props.changeTodo}
                onUpdateTodo={this.props.updateTodo}
            />
        )
    }
}

window.App.TodoAppContainer = connect(
    (state) => ({todos: state.todos}), {
        loadTodo: TodoActions.loadTodo,
        createTodo: TodoActions.createTodo,
        deleteTodo: TodoActions.deleteTodo,
        changeTodo: TodoActions.changeTodo,
        updateTodo: TodoActions.updateTodo
    })(TodoAppContainer);
