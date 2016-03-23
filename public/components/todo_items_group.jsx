
 var TodoItemsGroup = React.createClass({
    getInitialState: function() {
        return {
            tasks: []
        };
    },

    componentDidMount: function() {
      var component = this

      TodoService.on('change', function (todos) {
        component.setState({
          tasks: todos
        });
      });

      TodoService.GetTodos();
    },

    render: function() {
        return (

            <div>

            <ul id="sortable" className="list-unstyled">
                {this.state.tasks.map(function(task) {
                    return (
                        <TodoItem value={task._id} key={task._id} >
                            {task.text}
                        </TodoItem>
                    );
                })}
            </ul>

            <div className="todo-footer">
                <strong><span className="count-todos">{this.state.tasks.length}</span></strong> Items Left
            </div>

            </div>
        );
    }
 });
