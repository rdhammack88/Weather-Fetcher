var weather = document.getElementById('weatherInfo');

function getWeather(latitude, longitude) {
  var data = new XMLHttpRequest();
  // data.open("GET", "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139", true);
  
  data.open("GET", "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude, true);
  
  data.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
      var weatherInfo = JSON.parse(this.responseText);
      
      if(weatherInfo) {
//		  return weatherInfo;
		  
		  console.log(weatherInfo);
		  
		  var infoWeather = {
		  	celcius : weatherInfo.main.temp,
			farenheight : Math.round(parseInt(weatherInfo.main.temp) * 9 / 5 + 32)
		  };
		  
		  console.log(infoWeather);
		  //console.log(infoWeather.celcius);
		  
//		  	this.temp = weatherInfo.main.temp;
//			this.farenheight = Math.round(parseInt(this.temp) * 9 / 5 + 32);
		  
//		  return infoWeather;
		  
//		  function 
		  //var info = new returnInfo(weatherInfo);
//		  {
//		  	this.temp = weatherInfo.main.temp;
//			this.
//		  }
		  
//        var fahTemp = Math.round(parseInt(weatherInfo.main.temp) * 9 / 5 + 32);
//        // weather.innerHTML = weatherInfo.main.temp;
//        weather.innerHTML = fahTemp;
      } else {
        weather.innerHTML = "No Info";
      }
      
		return infoWeather;
//      return weatherInfo;
    }
  }
  data.send();
}

//var weatherInfo = "";
//getWeather();



function returnInfo(responseText) {
	this.temp = responseText.main.temp;
	this.farenheight = Math.round(parseInt(this.temp) * 9 / 5 + 32);
	
//	return {
////		"temp" : this.temp,
////		"farenheight": this.farenheight
//		temp : responseText.main.temp,
//		farenheight : Math.round(parseInt(this.temp) * 9 / 5 + 32)
//	}
}






document.getElementById('click').addEventListener('click', function() {
  // document.getElementById('weatherInfo').innerHTML = "Button Clicked Again!";
  
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
		
//		getWeather(latitude, longitude);
      //return latitude;
		
//		console.log(getWeather(latitude, longitude));
		
		var info = getWeather(latitude, longitude);
		//console.log(info.temp);
		
		weather.innerHTML = info.temp;
		
//		console.log(info.main.temp);
      
//		var weatherInfo = new returnInfo(info);
//		weather.innerHTML = weatherInfo.temp;
		
		
//      getWeather(latitude, longitude);
//		
//		weather.innerHTML = getWeather(latitude, longitude).returnInfo.temp;
    });
  }  else {
        weather.innerHTML = "Geolocation is not supported by this browser.";
    }
  
  // getWeather();
});