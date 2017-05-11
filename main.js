

// get the location of the user
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(locationSuccess);
  }
  else {
    // document.getElementById(weather.innerHTML) = "bruh";
  }
}

// if location is found
function locationSuccess(position) {
  // document.getElementById(weather.innerHTML) = position.cords.latitude + ',' + position.cords.longitude;
}

// getLocation();

// show the weather
function getWeather() {

  location = document.getElementById('location_textbox')
  console.log(location.text)

  reallySimpleWeather.weather({
      wunderkey: '', // leave blank for Yahoo
      location: 'New York, New York', //your location 
      woeid: '', // "Where on Earth ID"
      unit: 'f', // 'c' also works
      success: function(weather) {
        html = '<h2>'+weather.temp+'°'+weather.units.temp+'</h2>';
        html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
        html += '<li>'+weather.currently+'</li>';
        html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
  	  document.getElementById('weather').innerHTML = html;
      },
      error: function(error) {
  	  document.getElementById('weather').innerHTML = '<p>'+error+'</p>';
      }
  });
}

getWeather()