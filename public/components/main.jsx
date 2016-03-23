
var Main = React.createClass({
    render: function() {

        var tasks = [
            { value: '123', label: 'test task1'},
            { value: '124', label: 'test task2'},
            { value: '125', label: 'test task3'}
        ];

        return (
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="todolist not-done">
                 <h1>Tracked Habits</h1>
                    <TodoAdd />

                    <hr />

                    <TodoItemsGroup tasks={tasks} />

                </div>
            </div>
            <div className="col-md-6">
                <div className="todolist">
                 <h1>Already Done</h1>
                    <ul id="done-items" className="list-unstyled">
                        <li>Some item <button className="remove-item btn btn-default btn-xs pull-right"><span className="glyphicon glyphicon-remove"></span></button></li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
        );
    }
});
