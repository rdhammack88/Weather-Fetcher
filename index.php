<?php

$weather = "";
$error = "";
$state = "";

if(isset($_GET['search'])) { // && $_GET['city']
	$url = file_get_contents("http://api.openweathermap.org/data/2.5/weather?appid=c15cc038cb83db055b4bda70b413c550&q=" . urlencode($_GET['search']));
	
	$weather_info = json_decode($url, true);
	
	//print_r($weather_info);
	
	if($weather_info['cod'] == 200) {
		$cel_temp = ceil($weather_info['main']['temp'] - 273);
		$fah_temp = ceil($cel_temp * (9/5) + 32);
		
//		$weather = "The weather in " . $_GET['search'] . " is currently '" . $weather_info['weather'][0]['description'] . "'. ";
//		
//		
//		$weather .= " The temperature is " . $tempInCelcius . "&deg;C and the wind speed is " . $weather_info['wind']['speed'] . "m/s.";
//		
//		
//		$state = $weather_info['name'];
		
	} else {
		$error = "Could not find city - please try again.";
	}
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="">
	<title>Weather Fetch</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/superhero/bootstrap.min.css">
	<link rel="stylesheet" href="styles/styles.css">
</head>
<body>

	<header class="container-fluid">
		<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="get">
			<div class="input-group input-group-lg">
				<span class="input-group-btn">
					<button type="submit" class="btn btn-primary"><span class="glyphicon glyphicon-search"></span></button>
				</span>
				<input type="search" class="form-control" id="searchText" name="search" placeholder="Search by City or Zip Code">
			</div>
		</form>
	</header>
	
	<p><?php //$state; ?></p>
	<p><?php echo $weather; ?></p>
	

	<script
	  src="http://code.jquery.com/jquery-3.2.1.min.js"
	  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
	  crossorigin="anonymous"></script>

	<!--<script src="main.js"></script>-->
	<script src="js/app.js"></script>
</body>
</html>