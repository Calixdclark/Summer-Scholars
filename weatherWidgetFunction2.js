function loadTodaysWeather() {
    
    $(document).ready(function(){
      $('#submit').click(function() | {

        var cityName = $('input').val();
        var URL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&APPID=7bbeedaea5164bb8d2d29b4ed347e1df"

      })
    })

  //---------------------
  // This is where you would get references to all
  // HTML elements that you want to update with new data
  // based on the results of the asynchronous API call you make below
  //---------------------
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          
          //---------------------
          console.log("Successful...");
          //console.log(this.responseText);

          let weather = JSON.parse(this.responseText);
          console.log(weather);

          // This is where you would update the HTML elements above
          // with the data you pull from the API call response
          // document.getElementById("demo").innerHTML = this.responseText;
          //---------------------

          let dayCurrent = document.getElementById("dayCurrent");
          dayCurrent.innerHTML = new Date();

          let tempCurrent = document.getElementById("tempCurrent");
          tempCurrent.innerHTML = weather.main.temp;

          let descCurrent = document.getElementById("descCurrent");
          descCurrent.innerHTML = weather.weather[0].description;
          
      } else {
          
          //---------------------
          console.log("failure...")
          // error message for user that API is down
          //---------------------
          
      }
  };
  xhttp.open("GET", URL, true);
  xhttp.send();
}
      
//---------------------
// Make sure you call the function to begin the request for information
// In the weather widget, you will want to call this function using the
// onClick event of the form submit button
loadTodaysWeather();
//---------------------