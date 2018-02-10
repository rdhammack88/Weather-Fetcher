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
		<form action="weather.php" method="get"> <?php //echo $_SERVER['PHP_SELF']; ?>
			<div class="input-group input-group-lg">
				<span class="input-group-btn">
					<button type="submit" class="btn btn-primary"><span class="glyphicon glyphicon-search"></span></button>
				</span>
				<input type="search" class="form-control" id="searchText" name="search" placeholder="Search by City or Zip Code">
			</div>
		</form>
	</header>
	
	<div id="weatherInfo">
		<p><span id="temp"></span><span id="unit"></span></p>
		<p><span id="city"></span>, &nbsp;<span id="country"></span></p>
	</div>	
	
	<div class="container">
		<div class="forecast">
			<div class="well">
				<h3>Monday</h3>
			</div><!--  col-xs-2 col-xs-push-1 -->
			<div class="well">
				<h3>Tuesday</h3>
			</div><!--  col-xs-2 col-xs-push-1 -->
			<div class="well">
				<h3>Wednesday</h3>
			</div><!--  col-xs-2 col-xs-push-1 -->
			<div class="well">
				<h3>Thursday</h3>
			</div><!--  col-xs-2 col-xs-push-1 -->
			<div class="well">
				<h3>Friday</h3>
			</div><!--  col-xs-2 col-xs-push-1 -->
		</div>
	</div>
	

	<script
	  src="http://code.jquery.com/jquery-3.2.1.min.js"
	  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
	  crossorigin="anonymous"></script>

	<!--<script src="main.js"></script>-->
	<script src="js/app.js"></script>
</body>
</html>