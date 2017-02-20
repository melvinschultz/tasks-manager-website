$("#login-form").submit(function(e) {
    var url = "http://localhost/projects-oss/tasks-manager-api/v1/login";

    $.ajax({
        type: "POST",
        url: url,
        data: $("#login-form").serialize(),
        success: function(data)
        {
            var parsedData = [];
            $.each(data, function(i, item){
                parsedData[i] = item;
            });

            if (parsedData['apiKey']) {
                window.location.href = 'http://localhost/projects-oss/tasks-manager-website/tasks.php'+"?&apiKey="+parsedData['apiKey'];
            } else {
                $("#error").text(parsedData['message']);
            }
        },
        error: function (error) {
            var parsedError = [];
            $.each(error, function(i, item){
                parsedError[i] = item;
            });

            // TODO: a afficher plus proprement
            $("#error").text(parsedError['responseText']);
        }
    });

    e.preventDefault();
});

$("#register-form").submit(function(e) {
    var url = "http://localhost/projects-oss/tasks-manager-api/v1/register"; // the script where you handle the form input.

    $.ajax({
        type: "POST",
        url: url,
        data: $("#register-form").serialize(),
        success: function(data)
        {
            console.log(data);
            var parsedData = [];
            $.each(data, function(i, item){
                parsedData[i] = item;
            });

            if (parsedData['error'] == false) {
                $("#success").text(parsedData['message']);

            } else {
                $("#error").text(parsedData['message']);
            }
        },
        error: function (error) {
            var parsedError = [];
            $.each(error, function(i, item){
                parsedError[i] = item;
            });

            // TODO: a afficher plus proprement
            $("#error").text(parsedError['responseText']);
        }
    });

    e.preventDefault();
});
