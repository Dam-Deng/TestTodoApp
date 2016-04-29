const TodoHeader = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    name: React.PropTypes.string,
    todoCount: React.PropTypes.number
  },
  getDefaultProps() {
    return {
      title: "標題",
      name: "姓名",
      todoCount: 9999
    }
  },
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

// const TodoHeader = ({title, name, todoCount}) =>
//       <div>
//       <h1>{title}</h1>
//       <h4>hello {name} : 你還有 {todoCount} 項還有未完成待辦事項</h4>
//     </div>

// TodoHeader.propTypes = {
//   title: React.PropTypes.string,
//   name: React.PropTypes.string,
//   todoCount: React.PropTypes.number
// };

// TodoHeader.defaultProps = {
//   title: "標題",
//   name: "姓名",
//   todoCount: 999
// }


window.App.TodoHeader = TodoHeader;
