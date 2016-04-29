const {
  InputField,
  TodoHeader,
  TodoList
} = window.App;


var TodoApp = React.createClass({

  render: function() {
    const data = {
      title: "你的待辦清單",
      name: "dam",
      todoCount: 8
    }
    return (
      <div>
        <TodoHeader {...data}/>
        <InputField placeholder="新的待辦事項"/>
        <TodoList />
      </div>
    )
  }
});
window.App.TodoApp = TodoApp;
