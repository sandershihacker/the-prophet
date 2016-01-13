Parse.initialize("DtkovScYPdtvgh5iEuXBp4ahMSjmGgOJeUdrlueV", "RNw7URtQr6Sd2BY6PbDN9AlPk9H8mMXjAx11T0ZD");

var WeatherData = Parse.Object.extend("WeatherData");
var query = new Parse.Query("WeatherData");
query.first({
    success: function(object) {
        var humidity = object.get('humidity');
        var airPressure = object.get('airPressure');
        var temperature = object.get('temperature');
        alert("Humidity: " + humidity + "; Temperature: " + temperature + "Pressure: " + airPressure);
	    new Chartist.Line('#chart-pressure', {
	        labels: ['12:00AM', '4:00AM', '8:00AM', '12:00PM', '4:00PM', '8:00PM'],
	        series:[[airPressure, 10, 20, 30, 50, 80]]
	    });
	    new Chartist.Line('#chart-temperature', {
	        labels: ['12:00AM', '4:00AM', '8:00AM', '12:00PM', '4:00PM', '8:00PM'],
	        series:[[temperature, 16, 18, 28, 26, 23]]
	    });
	    new Chartist.Line('#chart-humidity', {
	        labels: ['12:00AM', '4:00AM', '8:00AM', '12:00PM', '4:00PM', '8:00PM'],
	        series:[[humidity, 32, 56, 43, 78, 43]]
	    });
    },
    error: function(error) {
        alert("Error: " + error.code + " " + error.message);
    }
});
