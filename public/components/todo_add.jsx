var TodoAdd = React.createClass({
    getInitialState: function() {
        return {};
    },

    render: function() {
        return (
            <input type="text" className="form-control add-todo" value={this.state.newTaskText} placeholder="Add todo" onKeyPress ={this._handleKeyPress} ref="taskName"/>
        );
    },

    _handleKeyPress: function(e) {
      var component = this;

        if (e.key === 'Enter') {
            //TODO: validation

            TodoService.AddTodo({
              value: e.target.value
            }, function(err, todo) {
              component.refs.taskName.getDOMNode().value = ''
            });
        }

    }
});
