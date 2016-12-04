const {
    InputField,
    TodoHeader,
    TodoList
} = window.App;


var TodoApp = React.createClass({

    render: function () {
        const todos = [
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
        ];

        const data = {
            title: "你的待辦清單",
            name: "dam",
            todoCount: todos.filter((todo) => !todo.completed).length
        };
        return (
            <div>
                <TodoHeader {...data}/>
                <InputField placeholder="新的待辦事項"/>
                <TodoList todos={todos}/>
            </div>
        )
    }
});
window.App.TodoApp = TodoApp;
