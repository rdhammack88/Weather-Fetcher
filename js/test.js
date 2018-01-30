

function getWeather() {
  var data = new XMLHttpRequest();
  data.open("GET", "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139", true);
  
  console.log('line 7. Clicked');
  data.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
  		console.log('line 10. Clicked');
      var weatherInfo = JSON.parse(this.responseText);
      
      if(weatherInfo) {
        document.getElementById('weatherInfo').innerHTML = weatherInfo;
      } else {
        document.getElementById('weatherInfo').innerHTML = "No Info";
      }
      
      //return weatherInfo;
    }
  }
  console.log('line 21. Clicked');
  data.send();
}

//var weatherInfo = "";
//getWeather();


document.getElementById('click').addEventListener('click', function() {
  // document.getElementById('weatherInfo').innerHTML = "Button Clicked Again!";
  getWeather();
});





////////// TEST BELOW HERE

$.ajax({
	url: "./includes/ajax.php?date="+searchQuery,
	method: "GET",
	success: function(res) {
		$('#blogSection').html(res);
	}
});

//////////////////////////////////

navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

///////////////////////

<iframe src="http://www.dustinhammack.com" frameborder="3" height="300" style="overflow: hidden; object-fit: scale-down;"></iframe>
	
//////////////////////////
	
//		url: "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139",
	
url: "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon,
//			url: "https://fcc-weather-api.glitch.me/api/current?lat=47&lon=108",
//////////////////////////