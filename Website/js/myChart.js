Parse.initialize("DtkovScYPdtvgh5iEuXBp4ahMSjmGgOJeUdrlueV", "RNw7URtQr6Sd2BY6PbDN9AlPk9H8mMXjAx11T0ZD");

var WeatherData = Parse.Object.extend("WeatherData");
var query = new Parse.Query("WeatherData");
query.first({
    success: function(object) {
        var humidity = object.get('humidity');
        var airPressure = object.get('airPressure');
        var temperature = object.get('temperature');
        alert("Humidity: " + humidity + "; Temperature: " + temperature + "Pressure: " + airPressure);
	    new Chartist.Line('#chart-temperature', {
          labels: ['16:15','16:00','15:47','15:25', '15:20', '14:47', '12:47', '10:47', '8:47'],
	        series:[[77.7, 78.4, 77.19, 80, 79.5, 79.52, 83, 78, 81]]
	    });
	    new Chartist.Line('#chart-pressure', {
          labels: ['16:15','16:00','15:47','15:25', '15:20', '14:47', '12:47', '10:47', '8:47'],
	        series:[[38, 35, 0, 37, 42, 39, 31, 27, 35]]
	    });
	    new Chartist.Line('#chart-humidity', {
          labels: ['16:15','16:00','15:47','15:25', '15:20', '14:47', '12:47', '10:47', '8:47'],
	        series:[[23.5, 34.7, 34.9, 34.4, 23.5, 21.0, 19.7, 23.5, 27]]
	    });
    },
    error: function(error) {
        alert("Error: " + error.code + " " + error.message);
    }
});
