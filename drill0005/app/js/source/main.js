(function (){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#addListButton').click(clickAddList/*checkEven*/);
  }

  function clickAddList(){
    var listNum =parseInt($('#text').val());
    var $lis;
    for(var i = 1; i <= listNum; i ++){
      if(i / 2 % 0){
        $lis = $('<li>');
        $lis[i].css('background-color', 'blue');
        $('#addListButton').after($lis);
      }
      else{
        $lis = $('<li>');
        $lis[i].css('background-color', 'red');
        $('#addListButton').after($lis);
      }
         
    }
      
  }


 /* function checkEven(){
    for(var i = 0; i < $('#numlis').length; i++){
      if(i / 2 % 0){
        $($('#numlis')[i]).css('background-color: blue');
      }
      else{
        $($('#numlis')[i]).css('background-color: red');
      }
    }
  }*/
})();
