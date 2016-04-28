const { TodoItem } = window.App;

const TodoList = React.createClass({
  render () {
    return (
      <ul>
        <TodoItem title="111" completed={false}/>
        <TodoItem title="112" completed={true}/>
        <TodoItem title="113" completed={false}/>
      </ul>
    )
  }
})

window.App.TodoList = TodoList;
