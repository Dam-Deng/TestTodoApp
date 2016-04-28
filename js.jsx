
var TodoApp = React.createClass({

  render: function() {
    let texts = [
      <span>t1</span>,
        <span>2</span>,
          <span>322</span>
              ];
            let app = <div>
              {texts}
            </div>
            return (
              <div>{app}</div>
            );
          }

        });

        window.App.TodoApp = TodoApp;
