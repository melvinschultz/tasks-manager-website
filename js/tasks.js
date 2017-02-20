// this is the id of the form
$(document).ready(function(e) {
    console.log('ready');

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
    console.log(apiKey);

    var url = "http://localhost/projects-oss/tasks-manager-api/v1/tasks"; // the script where you handle the form input.

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
                console.log(parsedData);
//                console.log(parsedData['tasks']);

                if (parsedData['tasks'] != null) {
                    var tasks = [];
                    $.each(parsedData['tasks'], function(i, item){
                        tasks[i] = item;
//                        console.log(tasks[i]['task']);

                        $("#sortable").append("<li class='ui-state-default'><div class='checkbox'><label><input type='checkbox' value='' />"+ tasks[i]['task'] +"</label></div></li>");

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

    var urladd = 'http://localhost/projects-oss/tasks-manager-api/v1/tasks';

    $('#addTask').click(function(e) {
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

    e.preventDefault(); // avoid to execute the actual submit of the form.
});