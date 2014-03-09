<?php
$con=mysqli_connect("localhost","root","","relic_login");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$sql="INSERT INTO login (username, password) VALUES ('$_POST[usr]','$_POST[ps]');";

if (!mysqli_query($con,$sql))
  {
  die('Error: ' . mysqli_error($con));
  }
//redirect back a page // close pop up

mysqli_close($con);
?>