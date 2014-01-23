(function(){
 
  'use strict';

  $(document).ready(init);

  function init(){
    $('#makeBoxes').click(makeBoxes);
  }

  function makeBoxes(){
    var arraySize = parseInt($('#textbox').val());
    console.log(arraySize);
    for(var i = 0; i < arraySize; i++){
      var $boxDiv = $('<div class="box">').css('border', '6px double rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')');
      $('#container').wrap($boxDiv);
      
    }
  }

})();
