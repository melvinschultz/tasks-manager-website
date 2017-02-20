$(document).ready(function(e) {
    // console.log('ready');

    function countTodos(){
        var count = $("#sortable li").length;
        // console.log(count);
        $('.count-todos').text(count);
    }

    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null){
            return null;
        }
        else{
            return results[1] || 0;
        }
    };

    var apiKey = $.urlParam('apiKey');
    var url = "http://localhost/projects-oss/tasks-manager-api/v1/tasks";

    var getAllTasks = function () {
        $.ajax({
            type: "GET",
            url: url,
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', apiKey);
            },
            success: function(data)
            {
                var parsedData = [];
                $.each(data, function(i, item){
                    parsedData[i] = item;
                });
                // console.log(parsedData);
//                console.log(parsedData['tasks']);

                if (parsedData['tasks'] != null) {
                    var tasks = [];
                    $.each(parsedData['tasks'], function(i, item){
                        tasks[i] = item;
//                        console.log(tasks[i]['task']);

                        $("#sortable").append("<li class='ui-state-default'><div class='checkbox'><p>" + tasks[i]['task'] +"</p><p class='task-id' style='display: none;'>"+ tasks[i]['id']+ "</p><button type='button' class='deleteTask btn btn-danger' title='Supprimer'><i class='glyphicon glyphicon-trash'></i></button><button type='button' class='modifyTask btn btn-warning' title='Modifier'><i class='glyphicon glyphicon-pencil'></i></button></div></li>");

                    });
                    countTodos();
                } else {
                    $("#error").text(parsedData['message']);
                }
            },
            error: function (error) {
//                console.log(error);
                var parsedError = [];
                $.each(error, function(i, item){
                    parsedError[i] = item;
                });
                console.log(parsedError);

                // TODO: a afficher plus proprement
                $(".container").html(parsedError['responseText']);
            }
        });
    };

    getAllTasks();

    $('#addTask').click(function(e) {
        var urladd = 'http://localhost/projects-oss/tasks-manager-api/v1/tasks';

        $.ajax({
            type: 'POST',
            url: urladd,
            data: $('#add-form').serialize(),
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', apiKey);
            },
            success: function(data)
            {
                location.reload();
            }
        });
    });

    $('#sortable').on('click', '.deleteTask', function() {
        var taskId = $(this).prev().text();
        var urldelete = 'http://localhost/projects-oss/tasks-manager-api/v1/tasks/'+taskId;

        $.ajax({
            type: 'DELETE',
            url: urldelete,
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', apiKey);
            },
            success: function(data)
            {
                console.log(data);
                location.reload();
            },
            error: function (error) {
                var parsedError = [];
                $.each(error, function(i, item){
                    parsedError[i] = item;
                });
                console.log(parsedError);
            }
        });
    });

    e.preventDefault(); // avoid to execute the actual submit of the form.
});