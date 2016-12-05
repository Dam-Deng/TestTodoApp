const {TodoItem} = window.App;

class TodoList extends React.Component{
    render () {
        const {onDeleteTodo} = this.props;
        const {todos} = this.props;
        const todoElements = todos.map(function (todo) {
            return (
                <li key={todo.id}>
                    <TodoItem
                        title={todo.title}
                        completed={todo.completed}
                        onDelete={() => onDeleteTodo && onDeleteTodo(todo.id) }/>
                </li>
            )
        });
        return (
            <ul>
                {todoElements}
            </ul>
        )
    }
}

TodoList.propTypes = {
    todos: React.PropTypes.array
};

TodoList.defaultProps = {
    todos: []
};


window.App.TodoList = TodoList;
