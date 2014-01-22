/* jshint camelcase:false */  //relaxing options

(function(){
 
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get-weather').click(getWeather);
  }

  function getWeather(){
   // alert('hey');
    var url = 'http://api.wunderground.com/api/8630e9fb327fc4e1/conditions/q/TN/Nashville.json?callback=?';
  //  $.getJSONP(url, fn);
    $.getJSON(url, receive);
  }

  function receive(data){
    var windArray = [data.current_observation.wind_dir, data.current_observation.wind_string, data.current_observation.wind_degrees, data.current_observation.wind_mph, data.current_observation.wind_gust_mph];
    console.log(windArray);
    for(var i = 0; i < windArray.length; i++){
      var $windDiv = $('<div class="windDivs">' + windArray[i] + '</div>');
      // OR
      //var $windDiv = $('<div>');
      //$div.text(wind[i]);
      $('#temperature').append($windDiv);
    }
  }

})();
