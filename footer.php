<script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="js/scripts.js"></script>
<?php

$uri = $_SERVER['REQUEST_URI'];
$parts = explode('/', $uri);
$id = $parts[count($parts) - 1];

if ($parts[3] == 'login.php') {
    echo "<script src='js/login.js'></script>";
} else {
    echo "<script src='js/tasks.js'></script>";
}

?>