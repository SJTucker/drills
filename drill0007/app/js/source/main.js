(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#addColors').click(clickaddColors);
  }

  function clickaddColors(){
    var colors = $('#textbox').val();
    var colorArray = colors.split(',');
    var result=0;
    for(var i = 0; i < colorArray.length; i++){
      var $colorDiv = $('<div class="colors">' + i + '</div>').css('background-color', colorArray[i]);
      $('#container').append($colorDiv);
      result += i;
    }
    var ran1 = Math.floor(Math.random() * 255);
    var $divSum = $('<div id="sumColor">' + result + '</div>').css('background-color', 'rgb(' + ran1 + ',' + ran1 + ',' + ran1 + ')');
    $('#container').after($divSum);
  }


})();
