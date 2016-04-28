const TodoHeader = React.createClass({
  render () {
    const {title, name, todoCount} = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <h4>hello {name} : 你還有 {todoCount} 項還有未完成待辦事項</h4>
      </div>
    )
  }
})

window.App.TodoHeader = TodoHeader;
