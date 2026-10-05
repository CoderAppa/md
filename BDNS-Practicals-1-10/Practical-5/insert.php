<?php
$m = new MongoClient();
echo "Connection to database successfully";
$db = $m -> MYDB239720;
echo "\nDatabase selected successfully";
$col = $db -> MyCol;
echo "\nCollection selected successfully";
$doc = array(
"name" => "Romal",
"age" => 20,
"dept" => "TYIT",
"rollno" => 239720
);
$col -> insert($doc);
echo "\nDocument inserted successfully";
?>
