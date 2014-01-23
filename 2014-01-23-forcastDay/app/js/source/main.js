/* jshint camelcase:false */  //relaxing options

(function(){
 
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add-zip').click(addZip);
    $('#get-forcast').click(getForcast);
  }



  function addZip(){
    var zipCode = $('#textbox').val();
    $('#options').append('<option value="' + zipCode + '">' + zipCode + '</option>');
  }
 
  function getForcast(){
    var selectValue = $('#options').val();
    var url = 'http://api.wunderground.com/api/8630e9fb327fc4e1/forecast/q/' + selectValue + '.json?callback=?';
    $.getJSON(url, receive);
  }
  
  function receive(data){
    var x = data.forecast.simpleforecast.forecastday;
    console.log(x);
    for(var i = 0; i < x.length; i ++){
      var weekday = x[i].date.weekday;
      var conditions = x[i].conditions;
      var icon = x[i].icon_url;
   //   var forecast = weekday + icon + conditions;
      var $divForecast=$('<div class="day"><div id="weekday">' + weekday + '</div>' + '<div id="icon"><img src="' + icon +  '"></div>' + '<div id="conditions">' + conditions + '</div></div>');
     // $divForecast.text(forecast);

      $('#container').append($divForecast);
    }
  }

  
})();
