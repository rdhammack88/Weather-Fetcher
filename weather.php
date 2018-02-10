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

header("Location: index.php");

?>