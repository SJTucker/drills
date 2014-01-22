/* jshint camelcase:false */  //relaxing options

(function(){
 
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add-option').click(addOption);
    $('#options').change(changeColor);
  }

  var optionCount = 0;//if declared inside addOption function, optionCount would be written as 0 everytime


  function addOption(){
    var color = $('#textbox').val();
    $('#options').append('<option value="' + color + '">' + color + '</option>');
    optionCount++;
  }
//Chyld Solution
//function addColor(){
//  var color = $('#colors').val();
//  var $option = $('<option>');
//  $option.val(color.toLowerCase());
//  $option.text(color.toUpperCase());
//

  function changeColor(){
    var selectColor = $('#options').val();
    $('#paint').css('background-color', selectColor);
  }
})();
