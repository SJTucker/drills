/* jshint camelcase:false */  //relaxing options

(function(){
 
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add-option').click(addOption);
  }

  var optionCount = 0;//if declared inside addOption function, optionCount would be written as 0 everytime


  function addOption(){
    var x = $('#textbox').val();
    $('#options').append('<option value="' + optionCount + '">' + x + '</option>');
    optionCount++;
  //expanded solution
  //var x = $('#textbox').val();
  //var $option = $('<option>');
  //$option.val(counter);
  //$option.text(x);
  //$('#options').append($option);
  }


})();
