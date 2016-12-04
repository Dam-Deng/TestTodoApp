const {TodoItem} = window.App;

const TodoList = React.createClass({
    render () {

        const {onDeleteTodo} = this.props;
        const {todos} = this.props;
        const todoElements = todos.map(function (todo) {
            // console.log(todo);
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
})

window.App.TodoList = TodoList;
