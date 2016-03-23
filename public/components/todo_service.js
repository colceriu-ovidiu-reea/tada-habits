var TodoService = (function () {

  var apiUrl = '/apitodo/todos';
  var todos = [];
  var events = {}

  var on = function (event, callback) {
    events[event] = events[event] || [];
    events[event].push(callback);
  };

  var trigger = function (event) {
    if (events[event].length) {
      events[event].forEach(function (e) {
        e(todos);
      });
    }
  };

  var GetTodos = function (callback) {

    $.get(apiUrl, function (result) {
      todos.length = 0;
      [].push.apply(todos, result);

      trigger('change');

      if (callback) {
        callback(null, todos);
      }
    })

  };

  var AddTodo = function (params, callback) {
    $.ajax({
        type: 'POST',
        url: apiUrl,
        data: {
            text: params.value
        }
    })
    .done(function(data) {
        todos.length = 0;
        [].push.apply(todos, data);

        trigger('change');

        if (callback) {
          callback(null, data);
        }
    })
  };

  var CheckTodo = function (params, callback) {
    $.ajax({
        type: 'DELETE',
        url: apiUrl,
        data: {
            todo_id: params.value
        }
    })
    .done(function(data) {
        todos.length = 0;
        [].push.apply(todos, data);

        trigger('change');

        if (callback) {
          callback(null, data);
        }
    })
  };

  return {
    GetTodos: GetTodos,
    AddTodo: AddTodo,
    CheckTodo: CheckTodo,
    on: on
  }
}());
