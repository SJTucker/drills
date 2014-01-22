(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#textButton').click(clickAddImage);
  }

  function clickAddImage(){
    var imageurl = $('#textbox').val();
    var image = $('<img src="' + imageurl + '" width="200" height="200">');
    $('#container').append(image);
    $('#textbox').val('');
  }
})();
