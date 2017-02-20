$(function() {

    $('#login-form-link').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

/*
// mark task as done
    $('.todolist').on('change','#sortable li input[type="checkbox"]',function(){
        if($(this).prop('checked')){
            var doneItem = $(this).parent().parent().find('label').text();
            $(this).parent().parent().parent().addClass('remove');
            done(doneItem);
            countTodos();
        }
    });
*/

/*
//delete done task from "already done"
    $('.todolist').on('click','.remove-item',function(){
        removeItem(this);
    });
*/


/*//create task
    function createTodo(text){
        var markup = '<li class="ui-state-default"><div class="checkbox"><label><input type="checkbox" value="" />'+ text +'</label></div></li>';
        $('#sortable').append(markup);
        $('.add-todo').val('');
    }*/
/*//mark task as done
    function done(doneItem){
        var done = doneItem;
        var markup = '<li>'+ done +'<button class="btn btn-default btn-xs pull-right  remove-item"><span class="glyphicon glyphicon-remove"></span></button></li>';
        $('#done-items').append(markup);
        $('.remove').remove();
    }
/!**/
/*//mark all tasks as done
    function AllDone(){
        var myArray = [];

        $('#sortable li').each( function() {
            myArray.push($(this).text());
        });

        // add to done
        for (i = 0; i < myArray.length; i++) {
            $('#done-items').append('<li>' + myArray[i] + '<button class="btn btn-default btn-xs pull-right  remove-item"><span class="glyphicon glyphicon-remove"></span></button></li>');
        }

        // myArray
        $('#sortable li').remove();
        countTodos();
    }*!/

//remove done task from list
    function removeItem(element){
        $(element).parent().remove();
    }*/

});
