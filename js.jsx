const {
  InputField,
  TodoHeader,
  TodoList
} = window.App;


var TodoApp = React.createClass({

  render: function() {
    return (
      <div>
        <TodoHeader title="你的待辦清單" name="dam" todoCount="9"/>
        <InputField placeholder="新的待辦事項"/>
        <TodoList />
      </div>
    )
  }
});
window.App.TodoApp = TodoApp;
