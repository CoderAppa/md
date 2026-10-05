<?php
$m = new MongoClient();
echo "Connection to database successfully";
$db = $m -> MYDB239720;
echo "\nDatabase selected successfully";
$col = $db -> MyCol;
echo "\nCollection selected successfully";
$col -> remove(array("name" => "Romal"));
echo "\nDocument deleted successfully";
?>
