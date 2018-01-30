$(function() {
	
	$('#click').click(function() {
		
	});
	
	$('#searchText').submit(function() {
		var city = $(this).val;
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(pos) {
				lat = pos.coords.latitude;
				lon = pos.coords.longitude;
	//				console.log(lat);
	//				console.log(lon);

				$.ajax({
					url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=c15cc038cb83db055b4bda70b413c550",
					method: "GET",
					success: function(res) {
						console.log(res);

	//					* 9 / 5 + 32);


						var city = res.name;
						var country = res.sys.country;
						console.log(city);
						console.log(country);

						var temp = Math.floor(res.main.temp);
						temp = country == 'US' ? temp : Math.floor(((temp - 32) * 5 / 9));
	//					temp = temp * 9 / 5 + 32;
						var unit = country == 'US' ? 'F' : 'C';

						var icon = res.weather.length > 1 ? res.weather[1].icon : res.weather[0].icon;

						$('#temp').html(temp + '&deg; ');
						$('#unit').html(unit);
						$('#city').html(city);
						$('#country').html(country);
	//					$('#icon').html(icon);
					}
				});				

			});

		} else {
			console.log("No GeoLocation Provided!");
		}
	});
	
	
	
	var lat = '',
		lon = '';
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(pos) {
			lat = pos.coords.latitude;
			lon = pos.coords.longitude;
//				console.log(lat);
//				console.log(lon);

			$.ajax({
				url: "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=c15cc038cb83db055b4bda70b413c550",
				method: "GET",
				success: function(res) {
					console.log(res);

//					* 9 / 5 + 32);
					
					
					var city = res.name;
					var country = res.sys.country;
					console.log(city);
					console.log(country);
					
					var temp = Math.floor(res.main.temp);
					temp = country == 'US' ? temp : Math.floor(((temp - 32) * 5 / 9));
//					temp = temp * 9 / 5 + 32;
					var unit = country == 'US' ? 'F' : 'C';
					
					var icon = res.weather.length > 1 ? res.weather[1].icon : res.weather[0].icon;
					
					$('#temp').html(temp + '&deg; ');
					$('#unit').html(unit);
					$('#city').html(city);
					$('#country').html(country);
//					$('#icon').html(icon);
				}
			});
			
			$.ajax({
				url: "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=c15cc038cb83db055b4bda70b413c550",
				method: 'GET',
				success: function(res) {
					console.log(res);
				}
			});

		});

	} else {
		console.log("No GeoLocation Provided!");
	}
	
	
	
});
///http://openweathermap.org/img/w/10d.png



//var lat = '';
//var lon = '';
//navigator.geolocation.getCurrentPosition(function(position) {
//    lat = position.coords.latitude;
//    lon = position.coords.longitude;
//});




//$.ajax({
//	url: 'https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=c15cc038cb83db055b4bda70b413c550',
//	method: 'GET',
//	success: function(res) {
//		console.log(res);
//	}
//});