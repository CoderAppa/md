<?php
$m = new MongoClient();
echo "Connection to database successfully";
$db = $m -> MYDB239720;
echo "\nDatabase selected successfully";
$col = $db -> MyCol;
echo "\nCollection selected successfully";
$col -> update(array("name" => "Romal"),array('$set'=>array("age" => 19)));
echo "\nDocument updated successfully";
?>
