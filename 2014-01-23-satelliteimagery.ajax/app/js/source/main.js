/* jshint camelcase:false */
(function(){
  
  'use strict';

  $(document).ready(init);

  function init(){
    $('#getImagery').click(getImagery);
  }

  function getImagery(){
    var zipCode = $('#textbox').val();
    var url = 'http://api.wunderground.com/api/8630e9fb327fc4e1/satellite/q/' + zipCode + '.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    var x = data.satellite;
    console.log(x);
    var image1 = x.image_url;
    var image2 = x.image_url_ir4;
    var image3 = x.image_url_vis;
    var $imageDiv = $('<div class="images"><img src="' + image1 + '"><img src="' + image2 + '"><img src="' + image3 + '">');
    $('#container').append($imageDiv);
  }


})();
