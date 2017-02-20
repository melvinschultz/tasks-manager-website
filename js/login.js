// this is the id of the form
$("#login-form").submit(function(e) {
    var url = "http://localhost/projects-oss/tasks-manager-api/v1/login"; // the script where you handle the form input.

    $.ajax({
        type: "POST",
        url: url,
        data: $("#login-form").serialize(), // serializes the form's elements.
        success: function(data)
        {
//                console.log(data);
            var parsedData = [];
            $.each(data, function(i, item){
                parsedData[i] = item;
            });
//                console.log(parsedData);

            if (parsedData['apiKey']) {
                window.location.href = 'http://localhost/projects-oss/tasks-manager-website/tasks.php'+"?&apiKey="+parsedData['apiKey'];
            } else {
                $("#error").text(parsedData['message']);
            }
//                console.log(parsedData['apiKey']);
        },
        error: function (error) {
//                console.log(error);
            var parsedError = [];
            $.each(error, function(i, item){
                parsedError[i] = item;
            });
//                console.log(parsedError);

            // TODO: a afficher plus proprement
            $("#error").text(parsedError['responseText']);
        }
    });

    e.preventDefault(); // avoid to execute the actual submit of the form.
});

// this is the id of the form
$("#register-form").submit(function(e) {
    var url = "http://localhost/projects-oss/tasks-manager-api/v1/register"; // the script where you handle the form input.

    $.ajax({
        type: "POST",
        url: url,
        data: $("#register-form").serialize(), // serializes the form's elements.
        success: function(data)
        {
            console.log(data);
            var parsedData = [];
            $.each(data, function(i, item){
                parsedData[i] = item;
            });
//                console.log(parsedData);

            if (parsedData['error'] == false) {
                $("#success").text(parsedData['message']);

            } else {
                $("#error").text(parsedData['message']);
            }
//                console.log(parsedData['apiKey']);
        },
        error: function (error) {
//                console.log(error);
            var parsedError = [];
            $.each(error, function(i, item){
                parsedError[i] = item;
            });
//                console.log(parsedError);

            // TODO: a afficher plus proprement
            $("#error").text(parsedError['responseText']);
        }
    });

    e.preventDefault(); // avoid to execute the actual submit of the form.
});
