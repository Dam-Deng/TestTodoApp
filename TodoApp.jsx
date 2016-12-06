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
                <InputField placeholder="新的待辦事項"/>
                <TodoList
                    todos={todos}
                    onDeleteTodo={
                        (id)=>this.setState({
                            todos: _deleteTodo(todos, id)
                        })
                    }
                    onChangeTodo={
                        (id, completed) => {
                            this.setState({
                                todos: _changeTodo(todos, id, completed)
                            })
                        }
                    }
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
    const target = todos.find((todo) => todo.id === id)
    if(target) target.completed = completed
    return todos;
}
window.App.TodoApp = TodoApp;
