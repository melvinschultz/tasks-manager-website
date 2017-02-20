<?php

include_once 'header.php';

?>

<div class="container">
    <div class="row">
        <p id="success" class="success"></p>
        <p id="error" class="error"></p>
        <div class="col-md-6 col-md-offset-3">
            <div class="todolist not-done">
                <h1>Todos</h1>
                <form id="add-form" action="" method="post">
                    <input type="text" name="task" class="form-control add-todo" placeholder="Add todo">
                </form>
                <button id="addTask" class="btn btn-success">Ajouter une tâche</button>

                <hr>
                <ul id="sortable" class="list-unstyled">
                </ul>
                <div class="todo-footer">
                    <strong><span class="count-todos"></span></strong> Items Left
                </div>
            </div>
            <a href="http://localhost/projects-oss/tasks-manager-website/login.php"><button type="button" class="return btn btn-info">Retour à la page d'authentification</button></a>
        </div>
        <!--<div class="col-md-6">
            <div class="todolist">
                <h1>Already Done</h1>
                <ul id="done-items" class="list-unstyled">
                    <li>Some item <button class="remove-item btn btn-default btn-xs pull-right"><span class="glyphicon glyphicon-remove"></span></button></li>

                </ul>
            </div>
        </div>-->
    </div>
</div>

<?php

include_once 'footer.php';

?>

</body>
</html>