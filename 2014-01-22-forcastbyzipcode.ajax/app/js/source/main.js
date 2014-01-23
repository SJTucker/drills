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
    var x = data.forecast.txt_forecast;
    console.log(x);
  }

  
})();
