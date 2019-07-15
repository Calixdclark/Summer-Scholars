$(document).ready(function () {

    // Call Weather for Current
    function weather(lat, long) {
        var URL = `api.openweathermap.org/data/2.5/weather?q=` + cityName + '&unit';

        $.getJSON(URL, function(data) {
            updateDOM(data);
        });
    }

    // Update Dom for Current
    function updateDOM(data) {
        var city = data.name;
        var temp = Math.round(data.main.temp_max);
        var desc = data.weather[0].description;
        var icon = data.weather[0].icon;

        $('#cityCurrent').html(city);
        $('#tempCurrent').html(temp);
        $('#descCurrent').html(desc);
        $('#iconCurrent').attr('src', icon);
    }

        // Call Weather for Tomorrow
        function weather(lat, long) {
            var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
    
            $.getJSON(URL, function(data) {
                updateDOM(data);
            });
        }
    
        // Update Dom for Tomorrow
        function updateDOM(data) {
            var city = data.name;
            var temp = Math.round(data.main.temp_max);
            var desc = data.weather[0].description;
            var icon = data.weather[0].icon;
    
            $('#cityTomorrow').html(city);
            $('#tempTomorrow').html(temp);
            $('#descTomorrow').html(desc);
            $('#iconTomorrow').attr('src', icon);
        }

        // Call Weather for After
        function weather(lat, long) {
            var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
    
            $.getJSON(URL, function(data) {
                updateDOM(data);
            });
        }
            
        // Update Dom for After
        function updateDOM(data) {
            var city = data.name;
            var temp = Math.round(data.main.temp_max);
            var desc = data.weather[0].description;
            var icon = data.weather[0].icon;
    
            $('#cityAfter').html(city);
            $('#tempAfter').html(temp);
            $('#descAfter').html(desc);
            $('#iconAfter').attr('src', icon);
        }

        // Call Weather for Later
        function weather(lat, long) {
            var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
            
            $.getJSON(URL, function(data) {
                updateDOM(data);
            });
        }
            
        // Update Dom for Later
        function updateDOM(data) {
            var city = data.name;
            var temp = Math.round(data.main.temp_max);
            var desc = data.weather[0].description;
            var icon = data.weather[0].icon;
            
            $('#cityLater').html(city);
            $('#tempLater').html(temp);
            $('#descLater').html(desc);
            $('#iconLater').attr('src', icon);
        }

        // Call Weather for Soon
        function weather(lat, long) {
            var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
            
            $.getJSON(URL, function(data) {
                updateDOM(data);
            });
        }
            
        // Update Dom for Soon
        function updateDOM(data) {
            var city = data.name;
            var temp = Math.round(data.main.temp_max);
            var desc = data.weather[0].description;
            var icon = data.weather[0].icon;
            
            $('#citySoon').html(city);
            $('#tempSoon').html(temp);
            $('#descSoon').html(desc);
            $('#iconSoon').attr('src', icon);
        }
});