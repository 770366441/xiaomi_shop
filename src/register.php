<?php
	header("Content-Type: text/html; charset=UTF-8");
//	$json = json_decode(file_get_contents("php://input"));
   /* $country = $json -> country;
    $iphone = $json -> iphone;*/
    $country = $_GET["country"];
	$iphone = $_GET["iphone"];
	$coon = new mysqli("localhost","root","","country","3306");
	$coon -> query("SET CHARACTER SET 'utf8'");
	$sql1 = "INSERT INTO users (country,iphone) VALUE ('$country','$iphone')";
	$sql2 = "select * from users where iphone='$iphone'";
	$result2 =$coon ->query($sql2);
	$rows = $result2 -> fetch_assoc();
	if($rows)
	{
		echo "手机号码已存在请换个";
	}
	else
	{
		$result1 =$coon -> query($sql1);
		
	}
?>