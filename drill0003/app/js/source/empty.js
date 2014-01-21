(function(){
  'use strict';

  function initialize(){
    $('#add-color').click(clickAddColors);
  }

  function clickAddColors(){
    var color=$('#color-text').val();
    var $box=$('<div>');
    $box.addClass('color');
    $box.css('background-color', color);

    $('#colors').append($box);
  }
  $('document').ready(initialize);
})();
