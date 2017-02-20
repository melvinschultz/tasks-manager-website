// this is the id of the form
$(document).ready(function(e) {
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
//                console.log(parsedData);
//                console.log(parsedData['tasks']);

            if (parsedData['tasks'] != null) {
                var tasks = [];
                $.each(parsedData['tasks'], function(i, item){
                    tasks[i] = item;
//                        console.log(tasks[i]['task']);

                    $("#sortable").append("<li class='ui-state-default'><div class='checkbox'><label><input type='checkbox' value='' />"+ tasks[i]['task'] +"</label></div></li>");
                });
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

    e.preventDefault(); // avoid to execute the actual submit of the form.
});

$("#addTask").submit(function(e) {
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

//        console.log("ajouter click");
    var url = "http://localhost/projects-oss/tasks-manager-api/v1/tasks"; // the script where you handle the form input.

    $.ajax({
        type: "POST",
        url: url,
        data: $("#addTask").serialize(), // serializes the form's elements.
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', apiKey);
        },
        success: function(data)
        {
            console.log(data);
            /* var parsedData = [];
             $.each(data, function(i, item){
             parsedData[i] = item;
             });
             //                console.log(parsedData);

             if (parsedData['apiKey']) {
             window.location.href = 'http://localhost/projects-oss/test-webservice/tasks.html'+"?&apiKey="+parsedData['apiKey'];
             } else {
             $("#error").text(parsedData['message']);
             }*/
//                console.log(parsedData['apiKey']);
        },
        error: function (error) {
            console.log(error);
            /*var parsedError = [];
             $.each(error, function(i, item){
             parsedError[i] = item;
             });*/
//                console.log(parsedError);

            // TODO: a afficher plus proprement
//                $("#error").text(parsedError['responseText']);
        }
    });

    e.preventDefault(); // avoid to execute the actual submit of the form.
});