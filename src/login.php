<?php
	header("Content-Type: text/html; charset=UTF-8");
	$json = json_decode(file_get_contents("php://input"));
	$username = $json -> username;
    $password = $json -> password;
	$coon = new mysqli("localhost","root","","country","3306");
	$coon -> query("SET CHARACTER SET 'utf8'");
	$sql1 = "select * from users where iphone='$username'";
	$result =$coon -> query($sql1);
	$rows = $result -> fetch_assoc();
	if(!$rows)
	{
		echo "用户名错误";
	}
	else{
		if($rows['iphone'] == $password)
			{
				echo "登陆成功";
			}
		else{
				echo "密码错误";	
		}
	}
?>