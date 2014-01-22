(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#buttonDiv').click(clickaddTwoButtons);
  }

  function clickaddTwoButtons(){
    addButton();

  }
/*
  function clearButtonTwo(){
    $('#buttonTwo').hide();
  }
*/
  function addButton(){
    var $button = $('<input type="button" id="buttonOne" value="Button 1">' + '<input type="button" id="buttonTwo" value="Button 2">');
    $('#buttonDiv').after($button);
  }

  function dynamicClick(){
    switch(this.id){
      case 'buttonTwo':
        $('#buttonOne').detach();
        break;
      case 'buttonOne':
        $('#two').detach();
    }
  }

})();
