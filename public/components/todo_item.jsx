var TodoItem = React.createClass({

    _handleChecked: function(e) {
        var component = this;

        TodoService.CheckTodo({
          value: e.target.value
        }, function(err, todo) {
          // component.refs.taskName.getDOMNode().value = ''
        });
    },

    render: function() {
        return (
            <li className="ui-state-default">
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value={this.props.value} onClick={this._handleChecked} />
                        {this.props.children}
                    </label>
                </div>
            </li>
        );
    }
});
