<?php
	header("Content-Type: text/html; charset=UTF-8");
	$coon = new mysqli("localhost","root","","country","3306");
	$coon -> query("SET CHARACTER SET 'utf8'");
	$sql2 = "select * from country_list ";
	$result2 =$coon ->query($sql2);
//	$data = [];
	while($rows=mysqli_fetch_array($result2)){
		
		$data[]=$rows["country"]; 

		
//   	$data[]=$rows;
    }
    echo JSON_encode($data);
//  for($i=0;$i<count($i);$i++)
//  	{
//  	}
//  $arr = array('json'=>$data);
	/*for($i=0;$i<count($data);$i++) {
	  echo $data[$i];

	
	}*/
?>