const TodoItem = React.createClass({
  render () {
    const { title, completed } = this.props;
    return (
    <li>
      <input type="checkbox" checked={completed} readOnly />
      <span>{title}</span>
      <button>X</button>
    </li>
    )
  }
})

window.App.TodoItem = TodoItem;
