const {TodoItem} = window.App;
const {List} = Immutable;

class TodoList extends React.Component {
    render() {
        const {onDeleteTodo} = this.props;
        const {onChangeTodo} = this.props;
        const {onUpdateTodo} = this.props;
        const {todos} = this.props;
        const todoElements = todos.map(function (todo) {
            return (
                <li key={todo.id}>
                    <TodoItem
                        title={todo.title}
                        completed={todo.completed}
                        onDelete={() => onDeleteTodo && onDeleteTodo(todo.id) }
                        onChange={(completed) => onChangeTodo && onChangeTodo(todo.id, completed) }
                        onUpdate={(content) => onUpdateTodo && onUpdateTodo(todo.id, content)}
                    />
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
    todos: React.PropTypes.object
};

TodoList.defaultProps = {
    todos: new List
};


window.App.TodoList = TodoList;
