<?php

include_once 'header.php';

?>

<div class="container">
    <div class="row">
        <p id="success" class="success"></p>
        <p id="error" class="error"></p>
        <div class="col-md-6 col-md-offset-3">
            <div class="todolist not-done">
                <h1>Mes tâches</h1>
                <form id="add-form" action="" method="post">
                    <input type="text" name="task" class="form-control add-todo" placeholder="Ma nouvelle tâche">
                </form>
                <button id="addTask" class="btn btn-success" title="Ajouter une tâche"><i class="glyphicon glyphicon-plus"></i></button>

                <hr>
                <ul id="sortable" class="list-unstyled">
                </ul>
                <div class="todo-footer">
                    <strong><span class="count-todos"></span></strong> Items Left
                </div>
            </div>
            <a href="http://localhost/projects-oss/tasks-manager-website/login.php"><button type="button" class="return btn btn-info" title="Retour à la page d'authentification"><i class="glyphicon glyphicon-share-alt"></i></button></a>
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