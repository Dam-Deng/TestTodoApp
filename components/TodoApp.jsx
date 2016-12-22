const {
    InputField,
    TodoHeader,
    TodoList
} = window.App;

const {connect} = ReactRedux;


class TodoApp extends React.Component {
    render() {
        const {
            todos,
            onSubmitEditing,
            onDeleteTodo,
            onChangeTodo,
            onUpdateTodo
        } = this.props;

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
                    onSubmitEditing={onSubmitEditing}
                />
                <TodoList
                    todos={todos}
                    onDeleteTodo={onDeleteTodo}
                    onChangeTodo={onChangeTodo}
                    onUpdateTodo={onUpdateTodo}
                />
            </div>
        )
    }
}

window.App.TodoApp = TodoApp;
